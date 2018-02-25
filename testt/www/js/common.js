/*Попап окно*/
$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}
$(document).mouseup(function (e) {
    var container = $("#popup1");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});
/*обязательные поля*/
(function( $ ){

$(function() {

  $('.rf').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
        btn = form.find('.btn_submit');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('.rfield').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.rfield').each(function(){
        if($(this).val() != ''){
          // Если поле не пустое удаляем класс-указание
		$(this).removeClass('empty_field');
        } else {
          // Если поле пустое добавляем класс-указание
		$(this).addClass('empty_field');
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){
      form.find('.empty_field').addClass("placeholderr", "placeholderr::placeholder", "placeholderr:-ms-input-placeholder", "placeholderr::-ms-input-placeholder"),
		form.find('.empty_field').attr("placeholder","Поле обязательно для заполнения"),
      // Через полсекунды удаляем подсветку
      setTimeout(function(){
        form.find('.empty_field').removeClass("placeholderr", "placeholderr::placeholder", "placeholderr:-ms-input-placeholder", "placeholderr::-ms-input-placeholder"),
		form.find('.empty_field').removeAttr('placeholder')
      
    },1000);}

    // Проверка в режиме реального времени
    setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').length;
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        } else {
          btn.addClass('disabled')
        }
      } else {
        btn.removeClass('disabled')
      }
    });

    // Событие клика по кнопке отправить
    btn.click(function(){
      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		lightEmpty();
        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
        form.submit();
      }
    });
  });
});

})( jQuery );

//Карусель
$(document).ready(function(){
$('.next').click(function (){
	
	var currentImage = $('.img.curry');
	var currentImageIndex = $('.img.curry').index();
	var nextImageIndex = currentImageIndex + 1;
	var nextImage = $('.img').eq(nextImageIndex);
	currentImage.fadeOut(1000);
	currentImage.removeClass('curry');
		
	if(nextImageIndex == ($('.img:last').index()+1)){
		$('.img').eq(0).fadeIn(1000);
		$('.img').eq(0).addClass('curry');
	} else {
		nextImage.fadeIn(1000);
		nextImage.addClass('curry');
	}
	
	
});
	$('.prev').click(function (){
		var currentImage = $('.img.curry');
		var currentImageIndex = $('.img.curry').index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $('.img').eq(prevImageIndex);
		
		currentImage.fadeOut(1000);
		currentImage.removeClass('curry');
		prevImage.fadeIn(1000);
		prevImage.addClass('curry');
	
	});

		 

				  });
/*
$(document).ready(function go(){

$(".next").click()
setTimeout(go, 4000);

});
*/
$('.sendwich').click(function(){
	$('.menubar').toggle('slow', function(){
		
	});
});






