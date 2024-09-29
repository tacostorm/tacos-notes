export default class Character {
    constructor(name, actor = null) {
      this.name = name;
      this.relationships = {}; // Stores relationships to other objects
      this.actor = actor
    }
  
    // Method to add a relationship between the character and another entity
    addRelationship(type, entity) {
      this.relationships[type] = entity;
    }
  
    // Method to display the character's details and relationships
    displayDetails() {
      console.log(`Character: ${this.name}`);
      for (let [relType, entity] of Object.entries(this.relationships)) {
        console.log(`${this.name} ${relType} ${entity.name}`);
      }
    }
  }