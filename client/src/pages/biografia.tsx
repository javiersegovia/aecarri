import React from 'react'
import _tw from 'twin.macro'
import { Container } from 'src/components/UI'
import GoBack from 'src/components/UI/GoBack'

const BiographyPage = () => {
  return (
    <>
      <div
        tw="bg-black bg-no-repeat bg-top bg-cover mt-10 rounded-md h-96 w-full max-w-screen-2xl mx-auto"
        style={{
          height: '70vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .0), rgba(0, 0, 0, .5)), url(/images/biografia.jpeg)`,
        }}
      >
        <GoBack />
      </div>
      <Container tw="mt-20 prose">
        <h1>Antonio Ecarri, un emprendedor de la educación</h1>
        <article tw="mt-10 text-lg text-justify pb-20">
          <p>
            <strong>Antonio Domingo Ecarri Angola</strong> (Valencia, Venezuela.
            26 de Abril de 1974). Abogado, profesor universitario, activista
            político, presidente fundador de la{' '}
            <strong>Casa Arturo Uslar Pietri</strong>, máximo dirigente de la{' '}
            <strong>Alianza del Lápiz</strong> y CEO de la firma de inversiones{' '}
            <strong>GFS Investment LLC</strong>. También articulista de los más
            importantes medios de comunicación del país:{' '}
            <strong>El Nacional, La Patilla, El Nuevo País</strong>, entre
            otros.
          </p>
          <p>
            Desde los diversos espacios que ha ocupado, en la administración
            pública y el accionar privado, ha sido férreo defensor de la
            educación pública oficial venezolana y ha estimulado tanto programas
            para fomentar la transformación del sistema educativo como la
            ejecución de propuestas para formar en emprendimiento a los
            ciudadanos.
          </p>
          <h3>Preparación académica</h3>
          <p>
            Bachiller graduado en Ciencias y Humanidades. Se graduó de abogado
            en la Universidad de Carabobo (1999), con mención honorífica Magna
            Cum Laude. Hizo una especialización en Derecho Financiero,
            obteniendo este título con la distinción Summa Cum Laude en la
            Universidad Católica Andrés Bello (2002). Además realizó estudios en
            Tributación Urbana en el Lincoln Institute of Land Policy en Boston,
            Massachusets, EEUU (2003).
          </p>

          <img src="/images/biografia2.jpeg" alt="Familia" />

          <h3>Un hombre de familia</h3>
          <p>
            Casado con María Luisa Feo La Cruz desde 2004, tiene tres hijos:
            Antonio José, Sofía Eugenia y Constanza Victoria. Es el mayor de
            tres hermanos. Hijo de Antonio Ecarri Bolívar y Milagros Angola de
            Ecarri.
          </p>
          <h3>El Educador</h3>
          <p>
            Desde los 17 años, se distinguió por su vocación a la enseñanza. Se
            inició asumiendo suplencias docentes en las materias de Historia
            Contemporánea de Venezuela en los más importantes liceos de la
            ciudad de Valencia, Carabobo.
          </p>
          <p>
            Durante su vida universitaria se destacó como preparador en las
            materias de Derecho Romano y Economía Política en su alma mater, la
            Universidad de Carabobo (UC). Fundó la Asociación de Preparadores
            universitarios, institución que reunió a los asistentes de cátedra y
            a los mejores estudiantes de esta casa de estudio.
          </p>
          <p>
            En el rol de educador, el cual ocupa hasta la actualidad, ha asumido
            –en distintos periodos- las cátedras Problemas Federales y
            Municipales, Derecho Tributario, Economía Política y Filosofía
            Política, en las principales casas de estudios del país: Universidad
            Metropolitana (Unimet), Universidad Santa María (USM), Universidad
            Católica Andrés Bello (UCAB), Universidad Católica del Táchira
            (UCAT), y Universidad Monteávila. En esta última se desempeña
            actualmente como profesor en el área de Postgrado.
          </p>
          <h3>Promotor de la participación ciudadana</h3>
          <p>
            Siendo titular de la Cátedra de Problemas Federales y Municipiales
            de la Universidad Monteávila, en el año 2006 promovió la fundación
            del Centros de Estudios de Participación Ciudadana. Durante su
            gestión como director-fundador de este espacio se formaron más de
            400 dirigentes comunitarios de Caracas en organización vecinal,
            elaboración de proyectos e instrumentos de participación social.
          </p>
          <h3>Fundación Casa Arturo Uslar Pietri</h3>
          <p>
            En el mismo año 2006, Ecarri sentó las bases de la Casa Arturo Uslar
            Pietri, institución que rescató la memoria histórica y la propiedad
            que sirvió como casa del notable político y uno de los escritores
            venezolanos más importantes del Siglo XX venezolano: Arturo Uslar
            Pietri.
          </p>
          <p>
            Desde entonces, esta fundación –donde funge hasta la fecha como
            presidente ejecutivo- se ha convertido en estímulo permanente para
            fomentar la escritura en los niños venezolanos, así como en
            trinchera de defensa para la educación venezolana. También ha
            servido como epicentro de debate sobre el pasado, presente y futuro,
            de la industria petrolera venezolana, y punta de lanza del
            pensamiento de Uslar Pietri.
          </p>
          <p>
            Este centro cultural es la única casa museo de un escritor
            venezolano operativa en el país, dedicada a cuidar el legado de uno
            de los más importantes protagonistas de la historia contemporánea
            venezolana. Sirve como espacio permanente de exposiciones, charlas,
            talleres, simposios, e innumerables actividades destinadas a la
            promoción del saber.
          </p>
          <h3>Sistema de niños escritores</h3>
          <p>
            Desde el inicio de sus actividades, en la Casa Arturo Uslar Pietri
            han fomentado la escritura en los niños venezolanos, centrando el
            foco en los infantes de zonas de menores recursos. El Sistema de
            Niños Escritores, una replica para la literatura de “El Sistema” del
            maestro José Antonio Abreu, ha beneficiado a más de 13.000 niños en
            sus distintos premios de literatura, de la mano de las alcaldías más
            importantes del país.
          </p>
          <p>
            Este proyecto social se hizo merecedor en el año 2010 del Premio
            Ideas IESA, y sirvió para promover el Premio Municipal de Niños
            Escritores que durante ocho años reconoció el talento de las
            generaciones futuras en 12 municipios de la geografía nacional.
          </p>
          <h3>Formación docente</h3>
          <p>
            Ante el abandono permanente del que han sido víctimas los maestros
            venezolanos por parte del Estado durante las últimas décadas, desde
            Casa Uslar Pietri sumaron esfuerzos con Microsoft para poner en
            marcha “Innovación en el saber”. Esto ha permitido que doten de
            herramientas tecnológicas a más de 300 educadores del Área
            Metropolitana.
          </p>
          <h3>Consenso educativo</h3>
          <p>
            Tras convertirse la Casa Uslar Pietri en un importante centro de
            debate sobre el futuro de la educación venezolana, se dio paso a la
            formación del Consenso Educativo, agrupando en éste a los
            principales actores del país en defensa de los ataques a la escuela
            venezolana por parte del gobierno de Hugo Chávez y posteriormente de
            Nicolás Maduro. El mismo ha servido, desde 2008, además como muro de
            contención a diversos intentos por ideologizar a los niños
            venezolanos.
          </p>
          <p>
            En paralelo la Casa Uslar Pietri ha venido trabajando desde su
            Unidad de Investigación y Seguimiento de la Educación Venezolana, en
            importantes y vitales propuestas para el rescate de la escuela
            venezolana.
          </p>
          <h3>Premio Iberoamericano de Literatura y otros reconocimientos</h3>
          <p>
            En 2010, Ecarri encabezó la entrega del Premio Iberoamericano de
            Literatura. En trabajo mancomunado con la Corporación Andina de
            Fomento (CAF) y otras importantes instituciones del país como el
            diario El Nacional, reconocieron el talento de jóvenes escritores de
            la región.
          </p>
          <p>
            El programa emblema: <strong>Las Casas del Lápiz</strong>
          </p>
          <p>
            En su afán por empoderar a los venezolanos de las zonas más
            deprimidas, desde el año 2010 ha germinado en las principales
            parroquias populares de Caracas centros de formación para el
            liderazgo y el emprendimiento, bautizados como “Casas del Lápiz”,
            donde además de especializar a hombres y mujeres en diversos artes y
            oficios, les dotan de conocimientos en gerencia, liderazgo,
            autoestima, y otros.
          </p>
          <p>
            Es un modelo educativo que ha permitido, hasta la fecha, a más de
            8.200 hombres y mujeres en la ciudad capital, y un total 11.000
            ciudadanos en todo el país, hacerse emprendedores, rompiendo
            círculos viciosos de vidas sumidas en la pobreza.
          </p>
          <p>
            El proyecto, que se originó en el deprimido oeste caraqueño, hoy se
            replica en seis estados del país, entre los que destacan los
            olvidados Aragua y Guárico, corazón de los llanos venezolanos; y
            cuenta con equipos promotores en otras latitudes.
          </p>

          <img src="/images/biografia3.jpg" alt="Alianza del Lapiz" />

          <h3>Activismo político</h3>
          <p>
            El nombre de Antonio Ecarri surgió en 2010, de cara a las elecciones
            de la Asamblea Nacional por iniciativa de las organizaciones de la
            educación: Cavep, Andiep, Fenasopadre, AVEC, Fe y Alegría,
            Conferencia Episcopal Venezolana, entre otros. Este candidato
            independiente fue el único capaz de medirse contra el chavismo, en
            medio del monumental boom petrolero, en la polémica parroquia 23 de
            enero.
          </p>
          <p>
            El resultado de la contienda fue el propio del uso de todos los
            recursos del Estado contra el portavoz de los maestros. Por menos de
            2% fue proclamado, en abierto fraude, su rival oficialista.
          </p>
          <p>
            Sin embargo, Ecarri no es nuevo es el oficio. Fue dirigente
            estudiantil desde muy joven y fundador del movimiento “Academia
            Solidaria” en la UC, lo que le permitió como independiente ganar las
            elecciones estudiantiles por amplio margen y convertirse en
            Representante de los Estudiantes ante el Consejo de la Facultad de
            Derecho y luego en el Consejo Universitario de la Universidad de
            Carabobo.
          </p>
          <p>
            Desde el año 2002, Ecarri se abocó al ejercicio público en la
            alcaldía de Chacao, estado Miranda. Fue subdirector de
            Administración Tributaria, síndico procurador municipal y en 2005
            fue electo concejal y presidente del Concejo Municipal. Su gestión
            permitió crear legislación clave en materia de transparencia y
            rendición de cuentas, la creación de Premios de Literatura. Además
            impulsó la construcción de importantes centros educativos que luego
            se convirtieron en modelos educativos de primer orden.
          </p>
          <p>
            En el 2013, y con el firme propósito de transformar a Caracas en la
            capital de la educación de América Latina, Ecarri puso su nombre al
            servicio de los caraqueños. Pese a ser el gran favorito en las
            encuestas y único con capacidad real de frenar a Jorge Rodríguez,
            entonces abanderado del chavismo, le tocó contarse con un aspirante
            paracaidista opositor.
          </p>
          <p>
            A escasas semanas de la contienda, prefirió –apostando a la unidad-
            hacerse a un lado para evitar ser motivo del fracaso de la
            alternativa democrática. Desde entonces, y pese a no tener cargo
            público, Ecarri ha sido el único portavoz opositor en continuar el
            trabajo social permanente en las zonas más vulnerables de la ciudad
            capital.
          </p>
          <p>
            Hoy, con el respaldo de la Alianza del Lápiz, proyecto político
            formalizado en el año 2013 y validada en 2018 ante el Consejo
            Nacional Electoral (CNE), mantiene importantes estructuras de
            trabajo social y político en las 22 parroquias del oeste capitalino.
          </p>
          <p>
            Hoy, con el respaldo de la Alianza del Lápiz, proyecto político
            formalizado en el año 2013, mantiene importantes estructuras de
            trabajo social y político en las 22 parroquias del oeste capitalino.
          </p>
          <h3>Empresario con visión de futuro</h3>
          <p>
            En conjunto a su trabajo social y político en Venezuela, en 2017
            Ecarri incursionó como creador y fundador de la empresa de
            consultoría financiera GFS Investement LLC, especializada en trading
            del mercado de divisas. Es una firma global con sedes en Arizona,
            Madrid y Caracas. Esta iniciativa no es aislada, ha sido consultor
            privado financiero y experto en creación de nuevos negocios desde
            haber obtenido sus estudios de postgrado en la UCAB.
          </p>
        </article>
      </Container>
    </>
  )
}

export default BiographyPage
