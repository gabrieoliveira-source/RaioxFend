// Endereço do app da web gerado pelo Apps Script (termina em /exec).
// O passo a passo está no LEIA-ME.

export const ENDPOINT = 'https://script.google.com/macros/s/AKfycbzcvA04HurUQWo9w3KYqQYgS_mIfxOcwYfXSC7BQXB3YTX5XEvbytqwgGw6MsXuX1oaww/exec';

// Enquanto não tiver o endereço, o quiz funciona normalmente e mostra o
// resultado, só não envia nada para a planilha.
export const endpointPronto = ENDPOINT.indexOf('COLE') === -1 && ENDPOINT.length > 10;
