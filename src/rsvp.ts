import { Player, RSVPStatus } from "./rsvpTypes";
import { Logger } from "./logger"

// Class RSVP has all the methods to add or update a player's RSVP, 
// gets a list of all confirmed attendees, 
// and count the number of total, confirmed, and declined responses, 
// per the project's specification
export class RSVP {
    private RSVPMap = new Map<string, { player: Player; status: RSVPStatus}>();

    constructor(private logger?: Logger) {}

    public manageRSVP(player: Player, status: RSVPStatus): void {
        this.RSVPMap.set(player.id, {player, status});
        this.logger?.info(`RSVP for ${player.name}\nStatus: ${status}\n`);
    }

    public getAttendees(): Player[] {
        return Array.from(this.RSVPMap.values())
        .filter(({ status }) => status === "Yes")
        .map(({ player }) => player);
    }

    public countResponses(): {total: number; confirmed: number; declined: number} {
        const responses = Array.from(this.RSVPMap.values()).map(entry => entry.status);
        const total = responses.length;
        const confirmed = responses.filter(status => status === "Yes").length;
        const declined = responses.filter(status => status === "No").length;
        return {total, confirmed, declined};
    }
}