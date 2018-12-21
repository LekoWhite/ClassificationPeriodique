$(document).ready(function(){

  $('.legend_child').mouseover(function(){
    var atom_type = $(this).attr('class').slice(13);
    atom_type = '.' + atom_type;
    var atom_list = $(atom_type);
    for(let i=0; i < atom_list.length; i++){
      atom_list[i].classList.add('JSTrigger');
    }
  });

  $('.legend_child').mouseout(function(){
    var atom_type = $(this).attr('class').slice(13, -9);
    atom_type = '.' + atom_type;
    var atom_list = $(atom_type);
    for(let i=0; i < atom_list.length; i++){
      atom_list[i].classList.remove('JSTrigger');
    }
  });

});
