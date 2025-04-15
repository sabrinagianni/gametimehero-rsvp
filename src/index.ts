import { Player } from "./rsvpTypes";
import { RSVP } from "./rsvp";
import { LoggerHelper } from "./logger";

const newLog = new LoggerHelper();
const newRSVP = new RSVP(newLog);
const players: Player[] = [
    {
        id: "1",
        name: "Gametime",
        email: "gametime@xxx.com",
        phoneNumber: "1111111111"
    },
    {
        id: "2",
        name: "Hero",
        email: "hero@xxx.com",
        phoneNumber: "2222222222"
    },
    {
        id: "3",
        name: "Sabrina",
        email: "sabrina@xxx.com",
        phoneNumber: "7382948172"
    },
    {
    id: "4",
    name: "otherPerson",
    email: "person@xxx.com",
    phoneNumber: "8763741934"
    }
];

newRSVP.manageRSVP(players[0], "Maybe");
newRSVP.manageRSVP(players[1], "No");
newRSVP.manageRSVP(players[2], "Yes");
newRSVP.manageRSVP(players[3], "Yes");

console.log("Confirmed Attendees:");
newRSVP.getAttendees().forEach(player => {
  console.log(`Name: ${player.name}\nCredentials: ${player.email}, ${player.phoneNumber}\n`);
});

console.log("----RSVP----");
const counts = newRSVP.countResponses();
console.log(`Total: ${counts.total}`);
console.log(`Confirmed: ${counts.confirmed}`);
console.log(`Declined: ${counts.declined}`);