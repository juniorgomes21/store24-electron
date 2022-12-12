import Button from "@mui/material/Button";
import Index from "../Index";

const commands = [
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    },
    {
        "commands" : "Command"
    }
]

function Commands() {

    return (
        <>
            <div className="flex justify-start w-full">
                <p className="font-bold">Lista de comandos</p>
            </div>
            <div className="flex flex-wrap">
                {
                    commands.map((command, index) => (
                    <Button
                        sx={{ ml: '2rem', mt: '2rem' }}
                        variant="contained"
                    >
                        {command.commands + ' ' + (index + 1)}
                    </Button>
                    ))
                }
            </div>
        </>
    )
}

export default Commands;
