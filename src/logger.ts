import { info } from "console";

// Logger interface, has to have a message and may be followed by additional comments
export interface Logger {
    info(message: string, ...comments: any[]): void;
}

export class LoggerHelper implements Logger {
    public info(message: string, ...comments: any[]): void {
        this.writeToConsole("info", message, comments);
    }

    private writeToConsole (
        messageType: "info",
        message: string,
        comments: any[],
    ): void {
        if(comments.length > 0) {
            console[messageType](message, ...comments);
        }
        else {
            console[messageType](message);
        }
    }
}