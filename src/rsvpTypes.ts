// RSVP status must be "Yes", "No", or "Maybe".
export type RSVPStatus = "Yes" | "No" | "Maybe";

// Player Object, realistically would have the Player's information which consists of id, name, email, and phone number.
export interface Player {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
}

// RSVPEntry object, consists of the player and their rsvp status.
export interface RSVPEntry {
    player: Player;
    status: RSVPStatus;
}