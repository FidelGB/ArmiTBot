const yts = require('yt-search');
/**
 * 
 * @param {String} url
 */
const getResultsYoutube = async url => {
    try {
        let videosRegex = "v=([a-zA-Z0-9\_\-]+)&?";
        let listRegex = "list=([a-zA-Z0-9\-\_]+)&?"
        if(url.match(listRegex)){
            let listaId = url.match(listRegex)[0].substring(5);
            
            let result = await yts({ listId: listaId });
            return {
                all: result.videos
            };
        }
        else if(url.match(videosRegex)){
            let videoId = url.match(videosRegex)[0].substring(2);
            
            let result = {
                all:[]
            }
            result.all.push(await yts({ videoId: videoId }));
            return result;
        }
        else
        {
            let result = await yts(url);
            return {
                all: [
                    result['all'][0]
                ]
            }
        }
    } catch (error) {
        return {
            error: error
        }
    }
}


module.exports = {
    getResultsYoutube: getResultsYoutube
}