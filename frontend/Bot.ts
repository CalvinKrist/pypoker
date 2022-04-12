import { Player } from "./Player";
import { Room } from "colyseus.js";
import { Terminal } from "xterm";
import { FitAddon } from 'xterm-addon-fit';

const fitAddon = new FitAddon();

function onSize() {
    fitAddon.fit();
}
window.addEventListener('resize', onSize, false);

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

export class Bot implements Player {
    id: string;
    room: Room;
    terminal: Terminal;
    state: any;
    logFile: string;
    debug: boolean;

    constructor() {
        this.logFile = "";
        this.debug = false;
    
        let downloadBtn = document.createElement('button');
        downloadBtn.innerText = "Download Log";
        downloadBtn.onclick = () => {download('log.txt', this.logFile)};
        document.body.appendChild(downloadBtn);

        let d1 = document.createElement('div');
        d1.classList.add("codeRunCon");
        d1.classList.add("table-responsive");
        d1.id = "codeRunCon";
        document.body.appendChild(d1);

        let div = document.createElement('div');
        div.id = 'terminal';

        d1.appendChild(div);

        this.terminal = new Terminal({ convertEol: true });
        this.terminal.loadAddon(fitAddon);
        this.terminal.open(div);

        fitAddon.fit();
    }

    updateState(newState: any) {
        this.state = newState;
        console.log(this.debug)
        this.log("State updated:", this.debug);
        this.log(JSON.stringify(newState, null, 2), this.debug);
    }
    onStateChanges(changes: any) {
        this.log("Changes detected:", this.debug);
        this.log(JSON.stringify(changes, null, 2), this.debug);
        this.terminal.scrollToBottom();
    }
    setUserId(userId: any) {
        this.log("Running as user " + userId);
        this.id = userId;
    }
    setRoom(room: Room) {
        this.room = room;
    }

    log(text, print: boolean = true) {
        if(print) {
            this.terminal.writeln(text);
            console.log(text);
            this.terminal.scrollToBottom();
        }

        this.logFile += text + "\n";
    }

}
