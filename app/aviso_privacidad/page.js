import Footer from "../components/Footer";
import Header from "../components/Header";
import PestanaFlotante from "../components/PestanaFlotante";
import Soporte from "../components/Soporte";

const tableData = [
  {
    oferta: "Bienestar 7 × 2",
    numero: "1841393",
    costo: "$50.00 MXN",
    aplica: "SI"
  },
  {
    oferta: "Bienestar 7 × 6",
    numero: "1841402",
    costo: "$70.00 MXN",
    aplica: "SI"
  },
  {
    oferta: "Bienestar 30 × 2",
    numero: "1841433",
    costo: "$100.00 MXN",
    aplica: "SI"
  },
  {
    oferta: "Bienestar 15 × 10",
    numero: "1841429",
    costo: "$130.00 MXN",
    aplica: "SI"
  },
  {
    oferta: "Bienestar 30 × 4",
    numero: "1841438",
    costo: "$150.00 MXN",
    aplica: "SI"
  },
  {
    oferta: "Bienestar 30 × 12",
    numero: "1841443",
    costo: "$190.00 MXN",
    aplica: "SI"
  },
  {
    oferta: "Bienestar 30 × 24",
    numero: "1841453",
    costo: "$250.00 MXN",
    aplica: "SI"
  },
  {
    oferta: "Bienestar 30 × 35",
    numero: "1841466",
    costo: "$300.00 MXN",
    aplica: "SI"
  },
  {
    oferta: "Bienestar 30 × 50",
    numero: "1841470",
    costo: "$500.00 MXN",
    aplica: "SI"
  },
]

export default function Legales() {

  return (
    <main>
      <PestanaFlotante />
      <Header />
      <section className="pt-44">
        <div className="max-w-5xl leading-8 mx-auto">
          <h2 className="text-[#9B264A] text-[50px] font-semibold py-14 leading-[54px]">Conoce los términos y condiciones de nuestras promociones vigentes.</h2>
        </div>
        <div className="border-y border-[#BA956040] bg-[#FFFDF7] pt-20 pb-12">
          <div className="max-w-5xl leading-8 mx-auto flex flex-col gap-4">
            <p>
              <span className="uppercase text-[20px]">AVISO DE PRIVACIDAD I AM ABUNDANCE S.A.P.I. DE C.V.</span> <br />
            </p>
            <p>

              En I AM ABUNDANCE S.A.P.I. DE C.V., estamos conscientes de la importancia que tiene la privacidad de su información, así como el uso y tratamiento que le damos a cada dato sensible que nos proporcionó, es la razón de que nosotros como una compañía
              comprometida en el cumplimiento de sus derechos tomamos las precauciones y recaudos para resguardar su información utilizando las medidas de seguridad necesarias para ello.
              <br /><br />
              En cumplimiento a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y demás regulaciones aplicables, ponemos a disposición de los titulares de datos personales que obran en posesión el siguiente:
              AVISO DE PRIVACIDAD
              <br /><br />
              I AM ABUNDANCE S.A.P.I. DE C.V., conocido comercialmente como INTERNET PARA EL BIENESTAR.
              Es responsable de recabar sus datos, del uso que se le dé a los mismos y de su protección, y al respecto le informamos lo siguiente:
              <br /><br />
              I AM ABUNDANCE S.A.P.I. DE C.V., se compromete a asegurar la privacidad de la información personal obtenida a través de su página web y/o cualquier otro medio que se utilice de forma comercial.
            </p>
          </div>
        </div>

        <div className="max-w-5xl leading-8 mx-auto py-10 flex flex-col gap-4">
          <p className="uppercase text-[20px]">¿Para qué fines utilizaremos sus datos personales?</p>

          <ul className="list-disc">


            <li>
              La identificación del titular
            </li>
            <li>
              Para seguimiento a consultas o solicitudes como cliente, así como procesar pedidos y entregar productos
            </li>
            <li>
              Para tramites fiscales
            </li>
            <li>
              Para el cumplimiento de las obligaciones en servicio de trámite de garantías, devoluciones y/o reembolsos.
            </li>
            <li>
              Para realizar seguimiento a gestiones de compra de los productos que nuestra compañía comercializa y distribuye.
            </li>
            <li>
              Proveerle información de rastreo del producto adquirido a fin de tener una entrega exitosa.
            </li>
            <li>
              Validación de pagos realizados por cualquier medio activo proporcionado en nuestra página.
            </li>
            <li>
              Notificación de cualquier promoción, sorteos u ofertas que son relevantes para nuestros clientes.
            </li>
            <li>
              También utilizamos esta información para brindar servicio en nuestro nombre o por parte de terceros, tales como vendedores, servicio técnico, logístico o de otro tipo a nuestro nombre.
            </li>
            <li>
              Y en su caso, para cualquier otra que como cliente solicite de manera directa por alguno de nuestros medios y se omita en lo anterior. De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:
            </li>
            <li>
              Notificarle sobre nuevos servicios o productos que tengan relación con los ya contratados o adquiridos.
            </li>
            <li>
              Comunicarle sobre cambios en los mismos, o en nosotros como compañía y que sea relevante para el cliente.
            </li>
            <li>
              Realizar evaluaciones periódicas de nuestros productos y servicios a efecto de mejorar la calidad de los mismos.
            </li>
            <li>
              Mercadotecnia o publicidad.
            </li>
            <li>
              Prospección comercial. En caso de que no desee que sus datos personales se utilicen para estos fines secundarios, indíquelo a continuación, o envíenos un correo electrónico a contacto@yosoybienestar.com No consiento que mis datos personales se utilicen para los siguientes fines:
            </li>
            <li>
              Notificarle sobre nuevos servicios o productos que tengan relación con los ya contratados o adquiridos.
            </li>
            <li>
              Comunicarle sobre cambios en los mismos, o en nosotros como compañía y que sea relevante para el cliente.
            </li>
            <li>
              Realizar evaluaciones periódicas de nuestros productos y servicios a efecto de mejorar la calidad de los mismos.
            </li>
            <li>
              Mercadotecnia o publicidad.
            </li>
            <li>
              Prospección comercial. La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o adquiere con nosotros. Estos son los tipos de información que recabamos:
            </li>
            <li>
              Información que usted nos proporciona: Recibimos y almacenamos toda la información que usted introduce en nuestra página Web o que nos facilita por cualquier otro medio. Puede elegir no proporcionar cierta información, sin embargo, si así lo hace, no podrá disfrutar de muchas de las funciones que le ofrecemos. La información que usted nos proporciona nos es útil para responder a sus peticiones, personalizar futuras compras que vaya a realizar, mejorar nuestro servicio y ponernos en contacto con usted. Ejemplo: Nombre, correo electrónico, número telefónico, domicilio etc.
            </li>
            <li>
              Información automática: Recibimos y almacenamos ciertos tipos de información, cada vez que usted interactúa con nosotros. Por ejemplo, al igual que hacen muchas otras páginas Web, utilizamos las «cookies» para recabar ciertos tipos de información cuando su navegador de Internet accede a I AM ABUNDANCE S.A.P.I. DE C.V. o a publicidad u otros tipos de contenidos que le son ofrecidos por
              parte de o en nombre de I AM ABUNDANCE S.A.P.I. DE C.V. en otras páginas Web.
            </li>
            <li>
              Móvil: Cuando usted descarga o usa aplicaciones (apps) creadas por I AM ABUNDANCE S.A.P.I. DE C.V. o por nuestras subsidiarias, podremos recibir información sobre su localización y sobre su dispositivo móvil, incluyendo un identificador único del mismo. Podremos utilizar dicha información para proporcionarle servicios basados en su localización, por ejemplo, resultados de búsqueda y otro contenido personalizado. La mayoría de dispositivos móviles le permiten desactivar dichos servicios de localización. Si usted desea dejar de recibir mensajes promocionales o cualquier otra información relacionada con los servicios a que se hace referencia en el presente aviso, podrá solicitarlo a través del correo electrónico antes citado o al teléfono.
            </li>
            <li>
              Comunicaciones vía Correo Electrónico: Para ayudarnos a que los correos electrónicos que le enviamos sean más útiles e interesantes, habitualmente recibimos una confirmación, en el caso de que su computadora soporte este tipo de tareas, cuando usted abre un correo electrónico enviado por I AM ABUNDANCE S.A.P.I. DE C.V. Si no desea recibir más correos electrónicos u otras notificaciones por parte nosotros, le rogamos ajuste sus Preferencias de. Notificación del Cliente
            </li>
          </ul>
        </div>

        <div className="border-y border-[#BA956040] bg-[#FFFDF7] pt-20 pb-12">
          <div className="max-w-5xl leading-8 mx-auto flex flex-col gap-4">
            <p className="uppercase text-[20px]">¿Qué son los Cookies y cómo se utilizan?</p>

            <p>
              Las cookies son identificadores únicos que transferimos a su dispositivo para permitir a nuestros sistemas reconocer su dispositivo y proporcionar características tales como de compra y Recomendaciones para Usted, anuncios personalizados en otros sitios web (por ejemplo, Afiliados de I AM ABUNDANCE S.A.P.I. DE C.V. con contenido proporcionado por I AM ABUNDANCE S.A.P.I. DE C.V., y el almacenamiento, en sus visitas, de artículos en su carrito de compras. En la función de Ayuda de la mayoría de los navegadores se indica cómo configurar su navegador para que no acepte cookies, para que le notifique cada vez que reciba una nueva cookie, o para desactivar todas las cookies. Asimismo, puede deshabilitar o eliminar datos similares que fueron utilizados por los complementos de los navegadores, tales como Flash Cookies, cambiando los ajustes de las extensiones o visitando la página Web de su fabricante. Sin embargo, le recomendamos que deje habilitadas las cookies a fin de aprovechar muchas de las funciones esenciales de I AM ABUNDANCE S.A.P.I. DE C.V. Por ejemplo, si rechaza o bloquea nuestras cookies, no podrá finalizar un pedido o usar ninguno de los productos o servicios de I AM ABUNDANCE S.A.P.I. DE C.V. que requieren que se identifique o inicie su sesión.
            </p>

            <ul className="list-disc ml-4">
              <li>
                Terceros Proveedores de Servicios: Contratamos a otras compañías y personas para realizar ciertas funciones en nuestro nombre. Algunos ejemplos son los que incluyen ejecutar pedidos, entregar paquetes, enviar correos postales y electrónicos, eliminar información repetida de las listas de clientes, análisis de datos, ofrecer asistencia de marketing, ofrecer resultados de búsquedas y enlaces (incluyendo enlaces y listas de pago), procesar pagos de tarjetas de crédito y ofrecer servicio de atención al cliente. Estos tendrán acceso a la información personal necesaria para realizar sus funciones, pero no podrán utilizarla para otros fines. En ningún caso, otorgaremos derechos para utilizar sus datos a estos terceros proveedores de servicios que sean más amplios que aquellos a los que ha consentido conforme a este Aviso de Privacidad.
              </li>
              <li>
                Protección de I AM ABUNDANCE S.A.P.I. DE C.V. y Otros: Divulgamosinformación personal y datos de cuentas de nuestros clientes cuando creemos que su divulgación es necesaria para el cumplimiento de la ley, para hacer cumplir o aplicar las Condiciones de Uso y otros acuerdos o para proteger los derechos, la propiedad o seguridad de I AM ABUNDANCE S.A.P.I. DE C.V., sus usuarios o terceros. Lo anterior, incluye el intercambio de información con otras sociedades y organizaciones para la protección contra el fraude y la reducción del riesgo de crédito. Obviamente, lo anterior no incluye vender, arrendar, compartir o revelar de otro modo la información personalmente identificable de clientes con fines comerciales de modo contrario a los compromisos adquiridos en el presente Aviso
                de Privacidad.
              </li>
            </ul>

            <p>
              Este documento es parte integral de Términos y Condiciones por lo que será responsabilidad de cada consumidor tenerlos en cuenta ya que al momento de registrarse o agregar cualquier dato personal, automáticamente se aceptan Términos y
              Condiciones Generales, así como las disposiciones aquí contenidas por lo que los usuarios garantizan y responden, en cualquier caso, de la veracidad, exactitud, vigencia y autenticidad de la Información Personal facilitada así mismo se da por entendido que en cumplimiento de términos legales nuestros servicios y productos únicamente están disponibles para personas con capacidad legal.
              <br /><br />
              Por lo tanto, aquellos que no cumplan con esta condición deberán de abstenerse de suministrar Datos Personales ya que I AM
              ABUNDANCE S.A.P.I. DE C.V. queda ajeno a cualquier represalia legal por no tener responsabilidad en el tema, sin embargo, podrán hacerlo a través de los padres o tutores. Este sitio web utiliza cookies propias para personalizar y facilitar al máximo la navegación
              del usuario. Las cookies se asocian únicamente a un usuario anónimo y su ordenador y no proporcionan referencias que permitan deducir datos personales del usuario. El usuario podrá configurar su navegador para que notifique y rechace la instalación de las cookies enviadas por este sitio web, sin que ello perjudique la posibilidad del usuario de acceder a los contenidos. Sin embargo, le hacemos notar que, en todo caso, la calidad de funcionamiento del sitio web puede disminuir.
              <br /><br />
              Este sitio web utiliza las siguientes cookies de terceros:
              Google analytics: almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por google. Por tanto, el ejercicio de cualquier derecho
              en este sentido deberá hacerlo comunicando directamente con google.
              Redes sociales: cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo me gusta o compartir.</p>

          </div>
        </div>

        <div className="border-[#BA956040] bg-[#FFFDF7] pt-20 pb-12">
          <div className="max-w-5xl leading-8 mx-auto flex flex-col gap-4">
            <p className="uppercase text-[20px]">¿Qué ocurre si desactivo las cookies?</p>

            <p>Para que entienda el alcance que puede tener desactivar las cookies le mostramos unos ejemplos:</p>

            <ul className="list-disc ml-4">
              <li>
                El sitio web no podrá adaptar los contenidos a sus preferencias personales.</li>
              <li>No será posible personalizar sus preferencias geográficas como, por ejemplo, el idioma.</li>
              <li>No podrá compartir contenidos de esa web en facebook, twitter o cualquier otra red social. Todas las redes sociales usan cookies, si las desactiva no podrá utilizar ninguna red social.</li>
              <li>El sitio web no podrá realizar analíticas web sobre visitantes y tráfico en la web, lo que dificultará que la web sea competitiva.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-y border-[#BA956040] bg-[#FFFDF7] pt-20 pb-12">
          <div className="max-w-5xl leading-8 mx-auto flex flex-col gap-4">
            <p className="uppercase text-[20px]">¿Cuales son y cómo puedo ejercer mis derechos ARCO?</p>

            <p>I AM ABUNDANCE S.A.P.I. DE C.V. responsable de su información le da a conocer de manera transparente cuales y como pueden ejercer sus derechos ARCO. Derechos ARCO</p>

            <ul className="list-disc ml-4">
              <li>Acceso: Conocer qué datos personales obtenemos y para qué los utilizamos.</li>
              <li>Rectificación: Solicitar corrección de información o por estar desactualizada.</li>
              <li>Cancelación: Consiste en la eliminación de datos de nuestra base de datos, por uso inadecuado.</li>
              <li>Oposición: Oponerse al uso de sus datos para fines específicos. Guía legal de derechos ARCO:https://transparencia.senado.gob.mx/documentos/Guia_ejercer_derechos_ARCO.pdf</li>
            </ul>

          </div>
        </div>

        <div className=" bg-[#FFFDF7] pt-20 pb-12">
          <div className="max-w-5xl leading-8 mx-auto flex flex-col gap-4">
            <p className="uppercase text-[20px]">¿Qué Opciones Tengo en Cuanto a mis Datos Personales y Cómo Puedo Ejercer mis Derechos ARCO?</p>

            <p>
              Como hemos indicado, usted siempre tiene la posibilidad de elegir no proporcionar información, a pesar de que ésta pueda ser necesaria para aprovechar algunas de las funciones de I AM ABUNDANCE S.A.P.I. DE C.V., tales como Mi Cuenta y poder quedarregistrado para futuras compras con un fácil acceso.
              <br /><br />
              Para proceder al ejercicio de sus derechos ARCO de acceso, rectificación, oposición o cancelar nuestro tratamiento de sus datos personales, o revocar su consentimiento para el tratamiento de sus datos personales, por favor póngase en contacto con nosotros por correo electrónico a contacto@yosoybienestar.com

            </p>
          </div>
        </div>

        <div className=" bg-[#FFFDF7] border-y border-[#BA956040] pt-20 pb-12">
          <div className="max-w-5xl leading-8 mx-auto flex flex-col gap-4">
            <p className="uppercase text-[20px]">Aceptación de los Términos</p>

            <p>
              Esta declaración de Confidencialidad / Privacidad está sujeta a los términos y condiciones de I AM ABUNDANCE S.A.P.I. DE C.V. lo cual constituye un acuerdo legal entre el usuario y I AM ABUNDANCE S.A.P.I. DE C.V.Si el usuario accesa I AM ABUNDANCE S.A.P.I. DE C.V. o medios de comunicación con I AM ABUNDANCE S.A.P.I. DE C.V., significa que ha leído, entendido y acordado los términos antes expuestos.
            </p>
          </div>
        </div>

        <div className="max-w-5xl leading-8 mx-auto py-4">
          <p>Notas adicionales</p>
          <ol className="list-decimal ml-4">
            <li>
              Ni este sitio web ni sus representantes legales se hacen responsables ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.
            </li>
            <li>
              Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debe efectuar su derecho a eliminación o desactivación de las mismas. Ni este sitio web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.
            </li>
            <li>
              En algunos casos es necesario instalar cookies para que el navegador no olvide su decisión de no aceptación de las mismas.
            </li>
            <li>
              En el caso de las cookies de google analytics, esta empresa almacena las cookies en servidores ubicados en estados unidos de américa y se compromete a no compartirla con terceros, excepto en los casos en los que sea necesario para el funcionamiento delsistema o cuando la ley obligue a tal efecto. Según google no guarda su dirección ip. Google inc. Es una compañía adherida al acuerdo de puerto seguro que garantiza que todos los datos transferidos serán tratados con un nivel de protección acorde a la normativa europea. Puede consultar información detallada a este respecto en este enlace. Si desea información sobre el uso que google da a las cookies le adjuntamos este otro enlace.
            </li>
            <li>
              Para cualquier duda o consulta acerca de esta política de cookies no dude en comunicarse con nosotros mediante la dirección de correo contacto@yosoybienestar.com En caso de que se actualice alguno de los supuestos que se señalan en el párrafo anterior,I AM ABUNDANCE S.A.P.I. DE C.V. informará al titular el motivo de su decisión, dentrode los plazos establecidos para tal efecto, por el mismo medio por el que se llevó a cabo la solicitud. I AM ABUNDANCE S.A.P.I. DE C.V. se reserva el derecho de modificar en cualquier momento el contenido del presente aviso de privacidad. Cualquier cambio en el aviso de privacidad será informado a través de la página de internet de I AM ABUNDANCE S.A.P.I. DE C.V. Una vez que se publique el aviso de privacidad en dicha página, entrará en vigor automáticamente.Última actualización 1 abril de 2024
            </li>
          </ol>

        </div>

      </section>
     
      <Soporte />
      <Footer />
    </main>
  );
}
