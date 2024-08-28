-- SQLBook: Code


create table entreprise (
  id int unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(155) not NULL,
  password VARCHAR(255) not NULL,
  description_annonces TEXT not NULL,
  nom_entreprise VARCHAR(155) NOT NULL,
  telephone VARCHAR(20) NOT NULL,
  taille_entreprise INT NOT NULL,
  validation BOOLEAN NOT NULL
);

create table annonces (
  id int unsigned PRIMARY KEY AUTO_INCREMENT NOT NULL,
  intituler_de_poste VARCHAR(155) not NULL,
  localisation VARCHAR(155) NULL,
  description TEXT not NULL,
  fourchette_de_salaire DECIMAL(10.2) not NULL,
  avantages TEXT not NULL,
  type_emploi VARCHAR(55) not NULL,
  lieu_du_poste VARCHAR(55) not NULL,
  entreprise_id int unsigned not NULL,
  Foreign key (entreprise_id) REFERENCES entreprise(id)
  );
  