import SlideWrapper from '../SlideWrapper';
import AnimatedElement from '../AnimatedElement';
import { FileText, Wallet, Users, Headphones, Package, Handshake, MessageCircle } from 'lucide-react';

const SlideExemples = () => {
  const cas = [
    { 
      icon: Wallet, 
      title: "Négociation salariale", 
      desc: "Équilibre entre salaire et avantages",
      exemple: "Accepter un salaire légèrement inférieur en échange de télétravail et formation"
    },
    { 
      icon: Users, 
      title: "Répartition des tâches", 
      desc: "Distribution équitable dans une équipe",
      exemple: "Rotation des tâches ingrates avec reconnaissance explicite"
    },
    { 
      icon: Headphones, 
      title: "Conflit client-service", 
      desc: "Résolution de plaintes et réclamations",
      exemple: "Remboursement partiel + geste commercial pour fidéliser"
    },
    { 
      icon: Package, 
      title: "Choix du fournisseur", 
      desc: "Arbitrage prix vs qualité",
      exemple: "Commander en volume pour obtenir qualité premium au prix standard"
    },
    { 
      icon: Handshake, 
      title: "Partenariat stratégique", 
      desc: "Négociation avec un partenaire",
      exemple: "Partage des ressources et des risques sur un projet commun"
    },
  ];

  return (
    <SlideWrapper>
      <div className="max-w-6xl mx-auto w-full">
        <AnimatedElement>
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-circle">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="slide-title mb-0">Études de cas</h2>
          </div>
        </AnimatedElement>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cas.map((item, index) => (
            <AnimatedElement 
              key={index} 
              delay={0.1 + index * 0.1}
              direction="up"
            >
              <div className="content-card-elevated h-full group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-secondary/10 border-l-3 border-secondary">
                  <p className="text-sm text-foreground">
                    <span className="font-medium text-secondary">Solution : </span>
                    {item.exemple}
                  </p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement delay={0.8}>
          <div className="mt-8 content-card bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-dashed border-primary/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center animate-bounce-subtle">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Activité interactive</h4>
                <p className="text-muted-foreground">
                  Demandez au public : "Comment résoudriez-vous ces situations ?" 
                  Encouragez le partage d'expériences personnelles.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </SlideWrapper>
  );
};

export default SlideExemples;
