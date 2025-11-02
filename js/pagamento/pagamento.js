function calculaResultado(){ /*Botão 'pagar'*/

Swal.fire({
    title: 'Compra concluida!',
    text: 'Seu pagamento foi processado com sucesso.',
    icon: 'success',
    confirmButtonText: 'OK',
    allowOutsideClick: false,
})

}
function calculaChave(){ /*Botão 'copiar chave pix'*/

    Swal.fire({
        title: 'Chave Pix copiada!',
        text: 'A chave Pix foi copiada para a área de transferência.',
        icon: 'success',
        allowOutsideClick: false,
    })
}
function calculaBoleto(){ /*Botão 'gerar boleto'*/
    Swal.fire({
        title: 'Boleto gerado!',
        text: 'O boleto foi gerado e enviado para o seu e-mail.',
        icon: 'success',
        allowOutsideClick: false,
    })

}
