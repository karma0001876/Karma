const help = (prefix) => {
	return `> *Sticker Commands* <
command : *${prefix}sticker* or *${prefix}stiker*
desc: converter imagem / gif / vídeo em adesivo
uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc: converte imagem em adesivo enquanto remove o fundo
uso: responder imagem ou enviar imagem com legenda
command : *${prefix}toimg*
desc: converter adesivo em imagem
uso: adesivo de resposta
command : *${prefix}tsticker* or *${prefix}tstiker*
desc: converter texto em adesivo
uso: * .tsticker texto aqui *
command : *${prefix}gtts*
desc: converter texto em fala / áudio
uso: * .gtts [cc] [texto] *
exemplo: * .gtts ja On2-chan *
command : *${prefix}url2img*
desc: faz capturas de tela da web
uso: * .url2img [type] [url] *
command : *${prefix}simi*
desc: sua mensagem será respondida por simi
uso: * .simi sua mensagem *
command : *${prefix}ocr*
desc: tira o texto da imagem
uso: responder imagem ou enviar imagem com legenda
command : *${prefix}wait*
desc: pesquisar anime com imagem [What Anime Is This / That]
uso: responder imagem ou enviar imagem com legenda
> *Grupo Comandos* <
command : *${prefix}linkgroup*
desc: pegue o link do grupo
uso: basta enviar a nota de 
comando: só pode ser usada quando o bot se torna admin, e quem envia o comando é admin!
command : *${prefix}tagall*
desc: marca todos os membros do grupo, incluindo administradores também
uso: basta enviar o comando
nota: este comando pode ser usado se você for um administrador de grupo
command : *${prefix}simih*
desc: ativa o modo simi no grupo
uso: * .simih 1 * para ativar o modo simi e * .simih 0 * para desativar o modo simi
nota: este comando pode ser usado se você for um administrador de grupo
}

exports.help = help
