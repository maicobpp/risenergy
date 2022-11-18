export const getStatus = ((status: string) => {
  let descrition = '';
  switch (status) {
    case 'quote':
      descrition = 'Orçamento';
      break;
    case 'open':
      descrition = 'Aberto';
      break;
    case 'applied':
      descrition = 'Aplicado';
      break;
    case 'aproved':
      descrition = 'Aprovado';
      break;
    case 'finished':
      descrition = 'Finalizado';
      break;
    case 'canceled':
      descrition = 'Cancelado';
      break;
    default:
      descrition = 'Indefinido';
  }
  return descrition;
});
