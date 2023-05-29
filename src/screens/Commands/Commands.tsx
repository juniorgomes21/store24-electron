import apiAxios from "@/services/apiAxios";
import Button from "@mui/material/Button";

const commands = [
    {
        "name" : "USSD",
        "url" : "/control/ussd"
    },
    {
        "name" : "Apagar todas as mensagens",
        "url" : "/control/deleteall"
    }
]

function Commands() {

    async function execComand(comand: string) {
        try {
            await apiAxios.get(comand);

        } catch(e: any) {
            console.log(e);
        }
    }

    return (
        <>
            <div className="flex justify-start w-full">
                <p className="font-bold">Lista de comandos</p>
            </div>
            <div className="flex flex-col">
                {
                    commands.map((command, index) => (
                    <Button
                        key={index}
                        sx={{ ml: '2rem', mt: '2rem' }}
                        variant="contained"
                        onClick={() => execComand(command.url)}
                    >
                        {command.name}
                    </Button>
                    ))
                }
            </div>
        </>
    )
}

export default Commands;
