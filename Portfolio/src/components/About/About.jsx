import portrait from '../../assets/images/moi.webp';

export default function About() {
    return (
        <section id='about' className="about">
            <h1>Cédric Ransinangue, développeur web</h1>
            <div className="bloc-portrait">
                <div className="portrait-container">
                    <img className="portrait" src={portrait} alt="portrait de Cédric Ransinangue" />
                </div>
                <p className="text-portrait">
                Depuis mon plus jeune âge, je suis passionné par la technologie. Malgré un démarrage tardif, j'ai plongé avec passion dans le monde du développement web. Mon parcours a commencé en autodidacte, explorant et apprenant par moi-même les complexités de la programmation. J'ai ensuite consolidé mes compétences grâce à une formation chez OpenClassrooms. Je suis quelqu'un de curieux par nature, toujours avide d'apprendre de nouvelles choses et de relever de nouveaux défis. Résoudre des problèmes est pour moi plus qu'un travail, c'est une passion. Chaque problème est une opportunité d'apprendre et de grandir en tant que développeur.
                </p>
            </div>
        </section>
    );
}
