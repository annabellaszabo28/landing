import { Resend } from 'resend';

// Vercel Serverless Function handler
export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Initialize Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
        console.error('RESEND_API_KEY is missing');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    const resend = new Resend(resendApiKey);

    try {
        const { firstName, lastName, email, subject, message, recaptchaToken } = req.body;

        // Validate inputs
        if (!firstName || !lastName || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Verify reCAPTCHA
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        if (recaptchaSecret && recaptchaToken) {
            const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
            });
            const verifyJson = await verifyRes.json();

            if (!verifyJson.success || verifyJson.score < 0.5) {
                return res.status(403).json({ error: 'Spam check failed' });
            }
        }

        // Construct Email Content
        const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">New Contact Form Submission</h2>
        <hr style="border: 1px solid #e2e8f0;">
        <p><strong>From:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3 style="color: #334155;">Message:</h3>
        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #6366f1;">
          ${message.replace(/\n/g, "<br>")}
        </div>
        <hr style="border: 1px solid #e2e8f0; margin-top: 24px;">
        <p style="color: #64748b; font-size: 12px;">Sent from Blockmarketing Site</p>
      </div>
    `;

        // Send Email
        await resend.emails.send({
            from: 'Lumina Digital <onboarding@resend.dev>',
            to: 'annabellaszabo28@gmail.com',
            replyTo: email,
            subject: `[Contact Form] ${subject}`,
            html: htmlContent,
        });

        return res.status(200).json({ success: true, message: 'Message sent successfully' });

    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
