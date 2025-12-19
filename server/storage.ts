import { randomUUID } from "crypto";

export interface IStorage {
  // No database needed for MVP - stateless chat application
}

export class MemStorage implements IStorage {
  constructor() {
    // No initialization needed for stateless chat
  }
}

export const storage = new MemStorage();
