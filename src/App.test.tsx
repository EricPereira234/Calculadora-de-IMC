import App from "./App";
import { render, screen } from "@testing-library/react";


it('Teste de botão cadastrar', ()=>{
    render(<App/>);

    let button = screen.getByText('Calcular');
    expect(button).toBeInTheDocument();
})

it ('Teste de input', ()=>{
    render(<App/>)

    let input1 = screen.getByPlaceholderText('Digite a sua altura');
    expect(input1).toBeInTheDocument();
})

it('Teste da class main', ()=>{
    render(
        <App/>
    );

    let Main = screen.getByText('Calcule o seu IMC.');
    expect(Main).toBeInTheDocument();
})
