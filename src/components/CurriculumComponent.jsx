import "./style.css";
// rafce o rafc
const Curriculum = () => {
  return (
    <>
      <section className="principal">
        <section className="contenedor">
          <section className="contenedor-first">
            <section className="perfil">
              <img
                className="imagen"
                src="./assets/Curri.jpg"
                alt="Foto Personal"
              />
            </section>
            <section className="datos">
              <section className="acerca-de-mi">
                <header className="text-perfil hola">Perfil</header>
                <section className="text-perfil">
                  Soy una persona responsable, respetuosa, honesta, siempre me
                  gusta aprender cosas nuevas, me gusta la informática y todo lo
                  relacionado con la tecnologías.
                </section>
              </section>
              <section className="datos-personales">
                <header className="text-perfil hola">
                  Informacion Personal
                </header>
                <section className="text-perfil">
                  Estado Civil <br /> Soltero
                </section>
                <section className="text-perfil">
                  Edad <br /> 21 años
                </section>
                <section className="text-perfil">
                  Cedula <br /> 001-020201-1056C
                </section>
                <section className="text-perfil">
                  Dirección <br /> Bo. Lomas de Guadalupe, terminal de la ruta
                  118, 1C al sur, 3C al este.
                </section>
              </section>
              <section className="aptitudes">
                <header className="text-perfil hola">Aptitudes</header>
                <section className="text-perfil">Trabajo en eqipo</section>
                <section className="text-perfil">Proactivo</section>
                <section className="text-perfil">Disponibilidad</section>
              </section>
              <section className="contacto">
                <header className="text-perfil hola">Contacto</header>
                <section className="contenedor-contacto">
                  <section className="cuadro"></section>
                  <section className="texto">
                    <section className="titulo">Telefono</section>
                  </section>
                </section>
                <section className="text-contacto">85182493 Claro</section>
                <section className="contenedor-contacto">
                  <section className="cuadro"></section>
                  <section className="texto">
                    <section className="titulo">Correo</section>
                  </section>
                </section>
                <section className="text-contacto correo">
                  Kennethgranados2001@gmail.com
                </section>
              </section>
            </section>
          </section>
          <section className="contenedor-second">
            <section className="uno">
              <section>Ashley Kenneth Granados Granado</section>
              <section className="nombre">Ingeniero de Sistemas</section>
            </section>
            <section className="dos">
              <section className="educacion">
                <header className="text-acerca-de-mi">Educación</header>
                <section className="texto-second">
                  <section> Educación primaria | Managua</section>
                  <section>2007 / 2012 Colegio Público Villa Libertad</section>
                  <section>Bachiller en ciencias y letras | Managua</section>
                  <section>2013 / 2017 Colegio Público Villa Libertad</section>
                  <section>Estudiante de Ingeniería de sistemas</section>
                  <section>
                    2020-Actualmente Universidad Nacional de Ingeniería /
                    Modalidad sabatina
                  </section>
                </section>
              </section>
              <section className="experiencia">
                <header className="text-acerca-de-mi">
                  Experiencia Laboral
                </header>
                <p className="laboral">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Modifacere molestiae amet numquam pariatur esse aliquid nemo
                  nostrum id nesciunt, dolore, a temporibus doloribus, maiores
                  sed? Praesentium cum itaque amet!
                </p>
              </section>
              <section className="habilidades">
                <header className="text-acerca-de-mi">Habilidades</header>
                <aside className="contenedor-hab">
                  <div className="barra">
                    <label>C#</label>
                    <progress max="100" value="80">
                      80%
                    </progress>
                    <br />
                  </div>
                  <div className="barra">
                    <label>JavaScript</label>
                    <progress max="100" value="70"></progress>
                    <br />
                  </div>
                  <div className="barra">
                    <label>HTML5</label>
                    <progress max="100" value="90"></progress>
                    <br />
                  </div>
                  <div className="barra">
                    <label>CSS3</label>
                    <progress max="100" value="80"></progress>
                    <br />
                  </div>
                  <div className="barra">
                    <label>Bootstrap 5</label>
                    <progress max="100" value="95"></progress>
                    <br />
                  </div>
                  <div className="barra">
                    <label>NodeJs</label>
                    <progress max="100" value="80"></progress>
                    <br />
                  </div>
                  <div className="barra">
                    <label>React</label>
                    <progress max="100" value="50"></progress>
                    <br />
                  </div>
                </aside>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default Curriculum;
