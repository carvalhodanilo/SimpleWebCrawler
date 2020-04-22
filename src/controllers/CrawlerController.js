const request = require('request')
const cheerio = require('cheerio')
const util = require('util')
const requestPromise = util.promisify(request);

exports.getProducts = async (req, res) => {
    const params = req.body;
    let returnData = []
    let successReturn = true;
    let msgReturn = 'Busca realizada com sucesso!'
    let statusCode = 200

    if (!params || !params.search || !params.limit || isNaN(params.limit)) {
      return res.status(400).json({
        success: false,
        msg: 'Corpo da requisição incorreto! Por favor verifique os campos.'
      })
    }

    await getBodyPage(`https://lista.mercadolivre.com.br/${params.search}_DisplayType_G#D[A:${params.search}]`).then( body => {
        $ = cheerio.load(body);

        $('.search-results .results-item').each(function(index){
            let price = $(this).find('.rowItem .item__info-link .item__price').text().trim().replace('R$ ', '').replace(' ', '.')
            let name  = $(this).find('.rowItem .item__info-link .main-title').text().trim()
            let store = $(this).find('.rowItem .item__info-link .item__brand-title-tos').text().trim().replace('por ', '') || null
            let link  = $(this).find('.rowItem .item__info-link').attr('href');
            let state = $(this).find('.rowItem .item__info-link .item__condition').text().trim() || 
                        $(this).find('.rowItem .item__info-link .item__location').text().trim()  || null
            
            returnData.push({ price, name, link, store, state })
            
            if(index >= params.limit - 1) return false;
        })
    }).catch(status =>{
        msgReturn = status === 404 ? 'Chave de busca não encontrada.' : 'Impossivel realizar sua solicitação! Contate o administrador do sistema.'
        statusCode = status
        successReturn = false
    })

    const retorno = {
        success: successReturn,
        msg: msgReturn,
        response: returnData        
    } 

    return res.status(statusCode).json(retorno);   
};

function getBodyPage(url) {
    return requestPromise(url).then(response => {
        if ( response.statusCode === 200 ) {
            return response.body
        }
        return Promise.reject(response.statusCode)
    })
}    