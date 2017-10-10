# jQuery character word or pattern matching counter

## Usage
Some examples:

```
<script type="text/javascript">

    $(document).ready(function () {
      'use strict';
			
			$('.navbar-brand').characterCount(
			{	message: "_nbCharCounter_ characters /_nbWordCounter_ words ]",
				messageClass: "limit-header",
				debug: false
			});
			
			$('textarea#message1').characterCount(
			{	message: "limit: _nbLimit_ characters, remaining: _nbRemaining_ [ _nbCharCounter_ letters/_nbWordCounter_ words ]",
				debug: false
			}).css({'background':'#2980b9','color':'#fff'});
			
			
			$('textarea#message2').characterCount(
			{	message: "limité à: _nbLimit_ caractères, Reste: _nbRemaining_ [ _nbCharCounter_ lettres /_nbWordCounter_ mots ]",
				debug: false
			});
			
			$('input#subscribe').characterCount(
			{	message: "Remain: _nbRemaining_ / _nbLimit_",
				debug: true,
				wrapTag: "div",
				messageClass: "panel panel-success",
			}).css({'background':'#16a085','color':'#fff'});	
			
			$('input#wrong').characterCount(
			{	debug: true
			}).css({'background':'#d35400','color':'#fff'});
		
			$('textarea#pattern').characterCount(
			{	message: "you write _nbWordCounter_ times the word \"jquery\"",
				customPattern: /(?:jQuery|JQUERY|jquery)+/g, 
				debug: true
			});	
			
    });
  </script>
```
## Demo

[Demo](https://benfarhat.github.io/jquery-character-word-pattern-counter
/)

2017 ?? Benfarhat Elyes
