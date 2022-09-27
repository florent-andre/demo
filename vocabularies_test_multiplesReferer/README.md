
* Ci dessous l'enchainement des requêtes qui montre le fonctionnement ok pour la propriété 'broader', mais en erreur pour la propriété 'multipleReferer'

# 1/ Création des entites multi-référencées 

- POST: /concepts
{
  "id": "skos_source_entity"
}

- POST: /gen_term_types
{
  "id": "gen_term_source_entity"
}

# 2/ Création des "referers"

- POST: /concepts
{
  "id": "referer_1"
}
{
  "id": "referer_2"
}

# 3/ mise à jour des referers avec `skos_source_entity`

- PATCH: /concepts/referer_1
{
  "broader": [
    "concepts/skos_source_entity"
  ]
}

- PATCH: /concepts/referer_2
{
  "broader": [
    "concepts/skos_source_entity"
  ]
}

# 4/ mise à jour des referers avec `gen_term_source_entity`

- PATCH: /concepts/referer_1
{
  "multipleReferer": [
    "gen_term_types/gen_term_source_entity"
  ]
}

- PATCH: /concepts/referer_2
{
  "multipleReferer": [
    "gen_term_types/gen_term_source_entity"
  ]
}

==> Error :
{
  "@type": "hydra:Error",
  "hydra:title": "An error occurred",
  "hydra:description": "An exception occurred while executing a query: SQLSTATE[23505]: Unique violation: 7 ERROR:  duplicate key value violates unique constraint \"uniq_b6b09e5b9c2a3f5\"\nDETAIL:  Key (gen_term_types_id)=(gen_term_source_entity) already exists.",
}