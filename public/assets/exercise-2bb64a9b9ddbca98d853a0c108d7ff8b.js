(function(){var e;e=function(){return $("#exercise_teacher_id").change(function(){var e,c;return e=$("#exercise_teacher_id option:selected").val(),c="/fetch_courses/"+e,$.ajax({url:c})}),$("#exercise_course_id").change(function(){var e,c;return e=$("#exercise_course_id option:selected").val(),c="/fetch_homeworks/"+e,$.ajax({url:c})}),$("#exercise_file").change(function(){console.log($(this.value).split("\\").last()),$(".float-inp").val($(this.value).split("\\").last())})},$(document).ready(e),$(document).on("page:load",e)}).call(this);