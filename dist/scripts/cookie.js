window.addEventListener('load', function() {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#000'
      },
      button: {
        background: '#f1d600'
      }
    },
    theme: 'edgeless',
    position: 'top',
    static: true,
    content: {
      message:
        'Questo sito utilizza i cookie per garantirti la miglior esperienza utente possibile.',
      dismiss: 'OK',
      link: 'Informazioni',
      href: 'https://www.iubenda.com/privacy-policy/10318033'
    }
  })
})
