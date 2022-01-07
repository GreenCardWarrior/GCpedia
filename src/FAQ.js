import React from 'react'

function FAQ ({faq, index, toggleFAQ}) {
	console.log(window.location.hash);
	if(decodeURI(window.location.hash) === '#'+faq.question) {
		faq.open = 'open';
	}
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={index}
			onClick={() => { window.location.hash="#"+faq.question;toggleFAQ(index)}}
		><a name={faq.question} href={"#"+faq.question} />
			<div className="faq-question" dangerouslySetInnerHTML={{ __html: faq.question }}>
			
			</div>
			<div className="faq-answer" dangerouslySetInnerHTML={{ __html: faq.answer }}>
			</div>
		</div>
	)
}

export default FAQ
