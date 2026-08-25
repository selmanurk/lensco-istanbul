export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  const { name, email, message } = req.body;
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [process.env.CUSTOMER_EMAIL],
      reply_to: email,
      subject: `Lens & Co — ${name} tarafından yeni mesaj`,
      html: `<p><strong>Ad:</strong> ${name}</p><p><strong>E-posta:</strong> ${email}</p><p><strong>Mesaj:</strong><br/>${message}</p>`
    })
  });
  if (response.ok) res.status(200).json({ success: true });
  else res.status(500).json({ error: 'Failed' });
}
