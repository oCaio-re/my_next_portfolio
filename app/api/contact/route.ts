import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, services, message } = body;

    // Strict input validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'O nome é obrigatório.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return NextResponse.json({ error: 'Por favor, informe um endereço de e-mail válido.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'A mensagem é obrigatória.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === 're_your_api_key_here') {
      console.error('RESEND_API_KEY is missing or unconfigured in environment variables.');
      return NextResponse.json(
        { error: 'Configuração do Resend ausente no servidor. Configure a chave RESEND_API_KEY no arquivo .env.local' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || 'xcaio2@gmail.com';
    const selectedServicesList = Array.isArray(services) && services.length > 0 ? services.join(', ') : 'Nenhum serviço selecionado';

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email.trim(),
      subject: `[Novo Contato Portfólio] ${name.trim()}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0d1117; color: #f0f6fc; border-radius: 12px; border: 1px solid #30363d;">
          <h2 style="color: #609BE3; font-size: 20px; font-weight: 700; margin-top: 0; padding-bottom: 12px; border-bottom: 1px solid #30363d;">
            ⚡ Nova Mensagem Recebida via Portfólio
          </h2>
          
          <table style="width: 100%; margin-top: 16px; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #8b949e; width: 140px; font-weight: 600;">Nome:</td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: 600;">${escapeHtml(name.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e; font-weight: 600;">E-mail:</td>
              <td style="padding: 8px 0;">
                <a href="mailto:${escapeHtml(email.trim())}" style="color: #609BE3; text-decoration: none; font-weight: 600;">
                  ${escapeHtml(email.trim())}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #8b949e; font-weight: 600;">Serviços Solicitados:</td>
              <td style="padding: 8px 0; color: #C9AA71; font-weight: 600;">${escapeHtml(selectedServicesList)}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #30363d;">
            <h3 style="color: #8b949e; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">
              Mensagem / Detalhes do Projeto:
            </h3>
            <div style="background-color: #161b22; padding: 16px; border-radius: 8px; border: 1px solid #30363d; color: #e6edf3; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">
              ${escapeHtml(message.trim())}
            </div>
          </div>

          <p style="margin-top: 24px; font-size: 11px; color: #484f58; text-align: center;">
            Mensagem enviada automaticamente pelo formulário de contato do seu Portfólio.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API call error:', error);
      return NextResponse.json({ error: error.message || 'Erro ao enviar e-mail via Resend API.' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error('Unexpected error handling contact form submission:', err);
    return NextResponse.json({ error: 'Erro interno no servidor ao enviar mensagem.' }, { status: 500 });
  }
}
