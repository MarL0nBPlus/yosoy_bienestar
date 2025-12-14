"use server"
import { z } from "zod";

const contactFormSchema = z.object({
    nombre: z.string()
        .min(4, "Tu nombre debe contener al menos 4 caracteres."),
    apellido: z.string()
        .min(4, "Tu apellido debe contener al menos 4 caracteres."),
    correo: z.string()
        .min(1, { message: "El campo no puede estar vacío." })
        .email("El email no es válido."),
    mensaje: z.string()
        .min(2, "El nombre de la mensaje debe contener al menos 2 caracteres."),
    telefono: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
        message: "Por favor introduzca un número de teléfono válido"
    })
});
export async function sendEmail(prevState, formData) {
    const contactFormData = Object.fromEntries(formData);
    const validatedContactFormData = contactFormSchema.safeParse(contactFormData);


    if (!validatedContactFormData.success) {
        const formFieldErrors =
            validatedContactFormData.error.flatten().fieldErrors;

        return {
            errors: {
                nombre: formFieldErrors?.nombre,
                apellido: formFieldErrors?.apellido,
                correo: formFieldErrors?.correo,
                mensaje: formFieldErrors?.mensaje,
                telefono: formFieldErrors?.telefono,
            },
        };
    }

    var data = new FormData()
    data.append('nombre', contactFormData.nombre)
    data.append('apellido', contactFormData.apellido)
    data.append('correo', contactFormData.correo)
    data.append('telefono', contactFormData.telefono)
    data.append('mensaje', contactFormData.mensaje)

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/sendSoporte`, {
        method: 'POST',
        body: data,
    });
    if (response.ok) {
    } else {
        console.log(response);
    }

    return {
        success: "Mensaje enviado satisfactoriamente",
    };
}


