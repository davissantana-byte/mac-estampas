function calculaResultado(){ /*Botão 'pagar'*/
    const form = document.getElementById('formPagamento');

    if( form.reportValidity()){ /* verifiaca se os campos estão preenchidos*/

Swal.fire({
    title: 'Compra concluida!',
    text: 'Seu pagamento foi processado com sucesso.',
    icon: 'success',
    confirmButtonText: 'OK',
    allowOutsideClick: false,
})
}

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

function calculaEndereco(){ /*Botão 'salvar endereço'*/
    const form = document.getElementById('formEndereco');

    if (form.reportValidity()){/* verifiaca se os campos estão preenchidos*/

    
    Swal.fire({
        title: 'Endereço salvo!',
        text: 'Seu endereço foi salvo com sucesso.',
        icon: 'success',
        allowOutsideClick: false,
    })
}
}
