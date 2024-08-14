export class Scores extends tables.Score {
	
	post(content) {
		content.region = server.config.clustering.nodeName
		console.log(content, server.config.clustering)
		return super.post(content);
	}
}
 
