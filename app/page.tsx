import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen p-6">
      {/* Decoraciones de fondo */}
      <div className="h-40 w-2/12 blur-2xl animate-pulse rounded-full b bg-auxiliary1 absolute top-0 z-0"></div>
      <div className="h-1/3 w-2/12 blur-3xl animate-pulse rounded-full b bg-auxiliary1 absolute right-0 z-0"></div>
      <div className="h-40 w-40 blur-3xl animate-pulse rounded-full b bg-auxiliary2 absolute top-200 right-0 inset-y-1/2 z-0"></div>
      {/* fin de decoraciones de fondo */}

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <h1 className="text-8xl font-bold text-primary underline decoration-solid decoration-1 z-10">
          Hola y bienvenido a <br /> AION!
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-6">
        <p className="text-xl text-primary col-start-2 z-10">
          Has llegado a esta página porque alguien te lo recomendó, o el
          algoritmo en redes te mostró algo que te Intereso, o porque tienes una
          busqueda activa de "maquila" en suplementos alimenticios, queremos
          conocerte y saber como te podemos ayudar.
        </p>
      </div>
      {/* TODO: mejorar la alineacion de las cards */}
      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-6 flex content-center gap-6">
        <div className="flex items-center max-w-lg bg-secondary rounded-xl p-4 text-primary">
          <div className="w-1/3">
            <Image
              src="/customers/evil-rabbit.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>

          <div className="w-2/3 pl-4">
            <h2 className="text-lg font-bold">
              ¿Tienes un gimnasio y quieres expandir tus líneas de negocio?
            </h2>
          </div>
        </div>

        <div className="flex items-center max-w-lg bg-auxiliary1 rounded-xl p-4 text-primary">
          <div className="w-1/3">
            <Image
              src="/customers/evil-rabbit.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>

          <div className="w-2/3 pl-4">
            <h2 className="text-lg font-bold">
              ¿Ya te dedicas al ramo naturista?
            </h2>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-6 flex justify-between gap-4">
        <div className="flex items-center max-w-lg bg-auxiliary2 rounded-xl p-4 text-primary">
          <div className="w-1/3">
            <Image
              src="/customers/evil-rabbit.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>

          <div className="w-2/3 pl-4">
            <h2 className="text-lg font-bold">
              ¿Eres creador de contenido y buscas un producto que te permita
              monetizar tu audiencia?
            </h2>
          </div>
        </div>

        <div className="flex items-center max-w-lg bg-auxiliary2 rounded-xl p-4 text-primary">
          <div className="w-1/3">
            <Image
              src="/customers/evil-rabbit.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>

          <div className="w-2/3 pl-4">
            <h2 className="text-lg font-bold">
              ¿Eres profecional de la salud y ves una necesidad en tus pacientes
              y buscas algo de alta calidad?
            </h2>
          </div>
        </div>

        <div className="flex items-center max-w-lg bg-auxiliary1 rounded-xl p-4 text-primary">
          <div className="w-1/3">
            <Image
              src="/customers/evil-rabbit.png"
              alt="logo"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>

          <div className="w-2/3 pl-4">
            <h2 className="text-lg font-bold">¿Buscas un emprendimiento?</h2>
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mt-6 flex">
        <div className="content-center ">
          <div className="flex items-center max-w-lg bg-secondary rounded-xl p-4 text-primary">
            <div className="w-1/3">
              <Image
                src="/customers/evil-rabbit.png"
                alt="logo"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>

            <div className="w-2/3 pl-4">
              <h2 className="text-lg font-bold">
                ¿Quieres desarrollar productos que ayuden a mejorar la calidad
                de vida de la gente?
              </h2>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-primary underline decoration-solid decoration-1 z-10">
            CONOCE NUESTRO PROCESO DE DESARROLLO:
          </h2>
          <p className="text-primary text-xl">
            ¡Has llegado al lugar indicado! Vive la experiencia AION. Nuestro
            enfoque es totalmente personalizado: trabajamos contigo para
            entender tus necesidades y ofrecerte asesoria tecnica que te ayude a
            destacar en el mercado asegurando la calidad, los tiempos de entrega
            y los costos de producción.
          </p>
        </div>
      </div>
    </main>
  );
}
