function calculaResultado(event) {
  event.preventDefault();

  Swal.fire({
    title: 'Endereço Salvo!',
    text: 'Seu endereço foi cadastrado com sucesso.',
    icon: 'success',
    confirmButtonText: 'OK',
    allowOutsideClick: false,
  }).then(() => {
    console.log('Dados processados (ex: salvar localmente ou via JS)');
  });

  return false;
}
