import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import { SoporteEmailTemplate } from "@/app/components/SoporteEmailTemplate";
import sgMail from '@sendgrid/mail';

export async function POST(req) {

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const data = await req.formData();

    const nombre = data.get('nombre');
    const apellido = data.get('apellido');
    const correo = data.get('correo');
    const telefono = data.get('telefono');
    const mensaje = data.get('mensaje');

    const emailHtml = await render(<SoporteEmailTemplate nombre={nombre} apellido={apellido} correo={correo} mensaje={mensaje} telefono={telefono} />);

    const msg = {
            to: 'soporte@yosoybienestar.com',
            from: 'soporte@yosoybienestar.com',
            subject: `Nuevo correo de soporte desde Yo Soy Bienestar`,
            html: emailHtml,
        };
    
        try {
            await sgMail.send(msg);
            return NextResponse.json({ success: true });
        } catch (error) {
            console.error(error);
            return NextResponse.json({ error });
        }

}
