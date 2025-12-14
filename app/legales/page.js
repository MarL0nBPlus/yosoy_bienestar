import Footer from "../components/Footer";
import Header from "../components/Header";
import PestanaFlotante from "../components/PestanaFlotante";

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
      <PestanaFlotante/>
      <Header />
      <section className="pt-44">
        <div className="max-w-5xl leading-8 mx-auto">
          <h2 className="text-[#9B264A] text-[50px] font-semibold py-14 ">Conoce los términos y condiciones de nuestras promociones vigentes.</h2>
        </div>
        <div className="border-y border-[#BA956040] bg-[#FFFDF7] pt-20 pb-12">
          <div className="max-w-5xl leading-8 mx-auto flex flex-col gap-4">
            <p>
              <span className="uppercase text-[20px]">Beneficio de Portabilidad - Bono de Gigas</span> <br />
              Beneficio de Portabilidad - Hasta 31 de Octubre de 2025.
            </p>
            <ol className="list-decimal">
              <li>El beneficio de DOBLE o TRIPLE Gigas aplica únicamente a usuarios que realicen y confirmen de manera exitosa la portabilidad de su número telefónico a Yo Soy Bienestar.</li>
              <li>La vigencia del beneficio será de 12 meses, contados a partir de la confirmación de la portabilidad.</li>
              <li>El bono de Gigas se abonará de manera automática en cada recarga realizada dentro de dicho periodo.</li>
              <li>El reflejo del bono podrá tardar entre 24 y 72 horas posteriores a la recarga.</li>
              <li>Este beneficio es de carácter personal e intransferible, y no es acumulable con otras promociones, salvo disposición expresa en los términos específicos de cada campaña.</li>
              <li>La vigencia, condiciones y límites del beneficio están sujetos a la normatividad aplicable y a la supervisión del Instituto Federal de Telecomunicaciones (IFT).</li>
              <li>Yo Soy Bienestar se reserva el derecho de modificar, suspender o cancelar esta promoción en cualquier momento, previa notificación en los canales oficiales.</li>
            </ol>
          </div>
        </div>

        <div className="max-w-5xl leading-8 mx-auto py-10 flex flex-col gap-4">
          <p className="uppercase text-[20px]">Promoción Fin y Regreso a Clases</p>

          <p><strong>I. Contexto:</strong><br />
            Con el objetivo de apoyar a nuestros clientes en su gestión comercial e incentivar las ventas, Altán ofrece una promoción, que otorga beneficios para las activaciones y recargas de los Usuarios Finales de los Clientes en el servicio de movilidad (MBB).</p>

          <p><strong>II. Promoción:</strong></p>

          <ul className="list-disc">
            <li>
              Bono TikTok y YouTube Yo Soy Bienestar ofrece un beneficio para las activaciones y recargas en el servicio de Movilidad vigente y en el Servicio de Conectividad SIM vigente, el cual consiste en otorgar Gigas para TikTok y YouTube conforme a la bolsa de datos de los productos participantes Multiactivables y productos Renovables. Aplica para ofertas MTH (Mes Calendario) y FFM mensuales (Fecha Fija Mes).
            </li>
            <li>En productos Renovables participantes, el Usuario Final (UF) que se de alta durante la vigencia de esta promoción, el bono se asignará en los productos con modalidad MTH por 4 asignaciones (1 asignación en el alta + 3
              renovaciones), y en los productos con modalidad FFM por 3 asignaciones (1 asignación en el alta + 2 renovaciones), siempre que el UF se mantenga en estatus "activo", cursando tráfico y con el mismo Producto con el cual se dio de alta. Al realizar un cambio de oferta o cambio de estatus a "suspendido" el UF perderá el beneficio.
            </li>
            <li>Este beneficio aplica para los siguientes productos participantes multiactivables (MA) y renovación automática (RA) conforme a la Tabla 1.
            </li>
          </ul>


          <p><strong>Tabla 1:</strong></p>
          <div>
            <table className="border w-full text-center">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="border p-2 uppercase">Oferta comercial MTH</td>
                  <td className="border p-2 uppercase">Número de registro IFTEL</td>
                  <td className="border p-2 uppercase">Costo</td>
                  <td className="border p-2 uppercase">Aplica promoción</td>
                </tr>
                {tableData.map((item, idx) => (
                  <tr key={idx} className="odd:bg-gray-100 even:bg-white">
                    <td className="border p-2">{item.oferta}</td>
                    <td className="border p-2">{item.numero}</td>
                    <td className="border p-2">{item.costo}</td>
                    <td className="border p-2">{item.aplica}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="flex gap-2 items-start ml-4 mb-4">
            <span class="material-symbols-outlined text-[27px]! text-[#BA9560] mt-2">
              error
            </span>
            Para los Usuarios Finales que tengan el beneficio de "Promoción Portabilidad Anexo 11 y 15 MBB", el bono se otorgará hasta 48 horas después de haber realizado la recarga y/o activación, aplica tanto para ofertas participantes del Anexo 11 y 15. El bono se otorgará sobre las activaciones y recargas que se realicen durante la vigencia de la promoción.</p>

          <p>
            <strong>III: Condiciones aplicables:</strong>
          </p>

          <ol className="list-decimal">
            <li>Únicamente aplicará para Clientes que tengan contratado y firmado el servicio de: Movilidad - anexo 11 vigente y el Servicio de Conectividad SIM Yo Soy Bienestar - anexo 15 vigente con Productos que incluyan Datos, Voz y SMS.
            </li>
            <li>Vigencia de la promoción: entendido como el periodo en el que estará disponible la promoción, el cual se considerará en dos periodos: o Desde el 14 de julio del 2025 hasta el 20 de julio del 2025, inclusive y o Desde 1° de agosto del 2025 al 7 de agosto del 2025, inclusive.
            </li>
            <li>Validez de la promoción: entendido como el periodo en el cual se mantienen aplicables los beneficios de esta promoción, el cual será:o Desde el 14 de julio del 2025 hasta el 20 de julio del 2025, inclusive yo Desde 1° de agosto del 2025 al 7 de agosto del 2025, inclusive.
            </li>
            <li>Esta promoción aplica únicamente a Usuarios Finales del Cliente, cuya activación ocurra dentro de la huella de cobertura y que el uso del servicio fuera de la huella de cobertura Altán sea en un porcentaje de consumo igual o menor a 15%.
            </li>
            <li>El Bono de TikTok y YouTube, aplica únicamente para activaciones y recargas en ofertas multiactivables y activaciones en ofertas renovables indicadas en esta promoción. La misma no tendrá costo adicional para el Cliente.
            </li>
            <li>Este bono se asignará con base a los Productos indicados en la tabla 1, durante la vigencia de esta promoción.
            </li>
            <li>Los Datos incluidos dentro de los productos participantes no serán acumulables entre distintos ciclos.
            </li>
            <li>Las Condiciones generales de Uso se describen al final de la nota promocional.
            </li>
            <li>Las modificaciones que sean realizadas a la presente promoción sustituirán y dejarán sin efectos la promoción original o versión anterior, según sea el caso, a partir de su presentación a registro ante el Instituto Federal de Telecomunicaciones.
            </li>
            <li>Todos aquellos términos empleados con letra inicial mayúscula que no se encuentren definidos en la presente promoción, tendrán el significado que se les atribuye por medio de la Oferta de Referencia vigente entre el Cliente y Altán.
            </li>
          </ol>
        </div>

        <div className="border-y border-[#BA956040] bg-[#FFFDF7] pt-20 pb-12">
          <div className="max-w-5xl leading-8 mx-auto flex flex-col gap-4">
            <p className="uppercase text-[20px]">Condiciones generales de uso para Datos incluidos en los Bonos YouTube y TikTok.</p>
            <br />
            <p><strong>YouTube:</strong></p>

            <ul className="list-disc">
              <li>Incluye: Navegación dentro de la aplicación oficial YouTube y desde cualquier navegador: búsqueda de contenido, reproducción de contenido, reproducción de shorts, visualización de la descripción del contenido y shorts, selección de "me gusta" o "no me gusta" en el contenido y shorts, suscripciones a canales, creación de comentarios en el contenido visualizado, habilitar subtítulos en el contenido, activación de notificaciones sobre algún contenido, carga de contenido en la plataforma, eliminación de contenido cargado en la plataforma, configuración de la cuenta, acceso a métricas de YouTube sobre un contenido, acceso a las suscripciones de YouTube, acceso al contenido guardado en la biblioteca, navegación en YouTube Música, navegación en YouTube Kids.
              </li>
              <li>No Incluye: Descargar de la aplicación de YouTube desde la tienda de aplicaciones, descargar la aplicación de YouTube Music desde la tienda de aplicaciones, descargar la aplicación de YouTube Kids desde la tienda de aplicaciones, compartir el contenido y shorts a través de otra aplicación distinta a YouTube, creación o ingreso a cuenta de YouTube, recuperación o cambio de contraseña de la cuenta de YouTube, el redireccionamiento a cualquier link o URL externa a YouTube aun cuando este haya sido compartido a través de un video YouTube, la carga y descarga videos y shorts fuera de la aplicación, la transmisión de video en tiempo real ("transmisión en vivo"), y cualquier otra funcionalidad no enlistada como incluida.
              </li>
            </ul>

            <br />
            <p><strong>TikTok®:</strong></p>

            <ul className="list-disc">
              <li>
                Incluye: Navegación dentro de la aplicación oficial TikTok, crear / editar TikToks, visualizar TikToks personales o de terceros, visualizar perfiles, dar "me gusta" a TikToks, seguir cuentas, visualizar bandeja de entrada, publicar un TikTok, añadir un comentario en un TikTok publicado dentro del aplicativo, enviar y recibir mensajes a través del chat de Tik Tok.
              </li>
              <li>
                No Incluye: descargar el aplicativo Tik Tok desde la tienda de aplicaciones, la carga y descarga de fotos o videos fuera de la aplicación oficial de TikTok®, aún y cuando estos hayan sido compartidos a través de la misma; compartir fotos o videos a través de otras aplicaciones distintas a TikTok® aún y cuando estos se hayan compartido a través de la aplicación; la transmisión de video en tiempo real ("Live Video Streaming"); la reproducción de video en tiempo real ("Live Video Streaming") a manera de espectador; el redireccionamiento a cualquier link o URL externo a TikTok®, aun cuando este haya sido compartido utilizándola a través de un mensaje, publicación, historia o video TikTok®, y cualquier otra funcionalidad no enlistada como incluida.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-[#BA956040] bg-[#FFFDF7] pt-20 pb-12">
          <div className="max-w-5xl leading-8 mx-auto flex flex-col gap-4">
            <p className="uppercase text-[20px]">Promoción día del Padre y Orgullo 2025</p>
            <p><strong>Promoción día del Padre y Orgullo 2025</strong></p>
            <br />
            <p><strong>Términos y condiciones:</strong></p>

            <ul className="list-disc">
              <li>Beneficio para incentivar las activaciones y recargas en el servicio de Movilidad anexo 11 vigente y en el Servicio de Conectividad SIM Altán - anexo 15 vigente, el cual consiste en otorgar doble de Gigas para TikTok y YouTube conforme a la bolsa de datos de los productos participantes Multiactivables y productos Renovables. Aplica para ofertas Mth (Mes Calendario) y FFM mensuales (Fecha Fija Mes).</li>
              <li>En productos Renovables participantes UF que se de alta durante la vigencia de esta promoción, el bono se asignará en los productos con modalidad Mth por 4 asignaciones (1 asignación en el alta + 3 renovaciones), y en los productos con modalidad FFM por 3 asignaciones (1 asignación en el alta + 2 renovaciones), siempre que el UF se mantenga en estatus "activo", cursando tráfico y con el mismo Producto con el cual se dio de alta. Al realizar un cambio de oferta o cambio de estatus a "suspendido" el UF perderá el beneficio</li>
            </ul>

            <br />
            <p><strong>Condiciones Aplicables:</strong></p>

            <ol className="list-decimal">
              <li>
                El Bono de TikTok y YouTube, aplica únicamente para activaciones y recargas en ofertas multiactivables y
                activaciones en ofertas renovables.</li>
              <li>Este bono se asignará con base a los Productos indicados, durante la vigencia de esta promoción.</li>
              <li>El Bono de TikTok y YouTube, indicado en esta promoción, no tendrán costos adicionales para el Cliente.</li>
              <li>Los Datos incluidos dentro de los productos participantes no serán acumulables entre distintos ciclos.
              </li>
            </ol>

            <br />
            <p><strong>Vigencia de promociones</strong></p>

            <ul className="list-disc">
              <li>
                Promoción Día del Padre: Del 12 de junio al 18 de Junio del 2025</li>
              <li>Promoción del Orgullo: Del 26 de junio al 2 de Julio del 2025</li>
            </ul>
          </div>
        </div>

        <div className="border-y border-[#BA956040] bg-[#FFFDF7] pt-20 pb-12">
          <div className="max-w-5xl leading-8 mx-auto flex flex-col gap-4">
            <p className="uppercase text-[20px]">Hot Sale 2025</p>

            <p>¡La edición de Hot Sale México 2025 está más cerca de lo que crees!
              <br /> Prepárate para aprovechar la variedad de ofertas del 26 de mayo al 3 de junio, donde podrás realizar compras online y en nuestros puntos físicos, así como recibir en tu domicilio. Para disfrutar los mejores descuentos antes que todos, recibe notificaciones en nuestro newsletter.</p>

            <p><strong>¿Qué es Hot Sale?</strong></p>
            <p>Hot Sale es un evento de ventas en línea organizado por la Asociación Mexicana de Ventas Online (AMVO), que durante los últimos años se ha transformado en la campaña más grande del país, y, como cada año, en Yo Soy Bienestar te ofreceremos increíbles descuentos y promociones en telefonía y en celulares para que tú y tu familia estrenen.
            </p>



            <p><strong>¿Cuando es Hot Sale?</strong></p>
            <p>La fecha oficial de Hot Sale 2025 es del 26 de mayo al 3 de junio. Mientras llega el día, en yosoybienestar.com puedes encontrar ofertas en productos de las marcas más reconocidas a nivel internacional todos los días, todo el año.
            </p>


            <p><strong>¿Qué significa Hot Sale en México?</strong></p>
            <p>El significado de Hot Sale en México y otros países de habla hispana prácticamente es el mismo. Literalmente se traduce como "venta caliente" haciendo referencia a las grandes ofertas y descuentos atractivos que hay en eventos
              comerciales y fechas específicas.</p>



            <p><strong>¿Qué significa Hot Sale en México?</strong></p>
            <p>El significado de Hot Sale en México y otros países de habla hispana prácticamente es el mismo. Literalmente se traduce como "venta caliente" haciendo referencia a las grandes ofertas y descuentos atractivos que hay en eventos
              comerciales y fechas específicas.</p>



            <p><strong>¿Cuáles serán las ofertas durante Hot Sale?</strong></p>
            <p>¡Hot Sale 2025 tendrá un sinfín de ofertas y promociones exclusivas en yosoybienestar.com <br />
              Encontrarás descuentos en celulares. Además de las últimas novedades y preeventas en línea. <br />
              Durante esta edición podrás realizar tus compras en línea, así como en nuestros puntos físicos. Además, al comprar en línea tendrás el beneficio de recibir tus productos en la puerta de tu hogar o, si lo prefieres, en nuestros puntos físicos
              en la Ciudad de México.</p>



            <p><strong>¿Cuánto tarda mi envío después de comprar en Hot Sale?</strong></p>
            <p>En promedio, las compras de celulares se entregan de 2 a 7 días hábiles a nivel República Mexicana. <br />
              Una vez confirmada tu compra, recibirás un correo electrónico con la fecha probable de entrega y el tipo de envío. La probabilidad de la fecha depende de la ciudad y el código postal.</p>


            <p><strong>¿Cómo puedo comprar en línea?</strong></p>
            <ol className="list-decimal">
              <li>Inicia sesión o compra sin registrarte.</li>
              <li>Agrega tus productos al carrito dando clic en "Agregar al carrito".</li>
              <li>Confirma los datos de entrega a domicilio.</li>
              <li>Elige tu método de pago con Crédito, tarjetas de crédito o débito, medios digitales o en efectivo.</li>
              <li>Verifica tus datos y da clic en "Confirmar compra".</li>
              <li>Revisa tu correo, ya que recibirás un mensaje con los datos de tu compra.</li>
            </ol>

            <p><strong>¿Cuáles son las formas de pago?</strong></p>
            <p>Puedes pagar en YoSoyBienestar.com, usando tarjeta de crédito y débito, pagos en efectivo con depósito en negocios
              participantes, PayPal y Visa Checkout.</p>

          </div>
        </div>

      </section>
      <hr />
      <section>
        <div className="max-w-5xl leading-8 mx-auto">

        </div>
      </section>
      <Footer />
    </main>
  );
}
