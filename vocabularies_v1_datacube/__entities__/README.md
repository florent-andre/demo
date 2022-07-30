
# exemple 1 : reprendre comptes.datacube.jsonld

* Données de test rentrés manuellement: 
```json
{
  "@context": "/contexts/DataSet",
  "@id": "/data_sets",
  "@type": "hydra:Collection",
  "hydra:member": [
    {
      "@id": "/data_sets/1",
      "@type": "http://purl.org/linked-data/cube#DataSet",
      "id": 1,
      "description": "Import demo stats aksis",
      "publisher": "stats:org/MindMatcher",
      "subject": "stats:toUpdate"
    }
  ],
  "hydra:totalItems": 1
}

{
  "@context": "/contexts/DataStructureDefinition",
  "@id": "/data_structure_definitions",
  "@type": "hydra:Collection",
  "hydra:member": [
    {
      "@id": "/data_structure_definitions/1",
      "@type": "http://purl.org/linked-data/cube#DataStructureDefinition",
      "component": "/component_specifications/5",
      "id": 1
    }
  ],
  "hydra:totalItems": 1
}

{
  "@context": "/contexts/ComponentSpecification",
  "@id": "/component_specifications",
  "@type": "hydra:Collection",
  "hydra:member": [
    {
      "@id": "/component_specifications/5",
      "@type": "http://purl.org/linked-data/cube#ComponentSpecification",
      "componentRequired": true,
      "dimension": "/dimension_properties/1",
      "id": 5
    }
  ],
  "hydra:totalItems": 1
}

{
  "@context": "/contexts/DimensionProperty",
  "@id": "/dimension_properties",
  "@type": "hydra:Collection",
  "hydra:member": [
    {
      "@id": "/dimension_properties/1",
      "@type": "http://purl.org/linked-data/cube#DimensionProperty",
      "id": 1,
      "label": "stats:annee",
      "range": "xsd:decimal"
    }
  ],
  "hydra:totalItems": 1
}

{
  "@context": "/contexts/Observation",
  "@id": "/observations",
  "@type": "hydra:Collection",
  "hydra:member": [
    {
      "@id": "/observations/2",
      "@type": "http://purl.org/linked-data/cube#Observation",
      "annee": 0.4,
      "dataSet": "/data_sets/1",
      "id": 2,
      "description": "sdqfdq",
      "publisher": "",
      "subject": ""
    }
  ],
  "hydra:totalItems": 1
}

```
