<template>
  <div>
    <h1 id="title-words">五十音大冒險</h1>
  </div>
  <div>
    <img id="main-picture" class="img-rounded" src="..\..\src\assets\doukutsu.png">
  </div>
  <div class="main-par">
    為培育學習科學領域之專業人才，並引領國內新型態學習研究與學習實務的發展，創學習科學學士學位學程。畢業為資訊學士學位。本學位學程除了整合校內重要相關之資源，亦網羅了校內許多優秀的師資支援開授相關課程，並與資訊教育研究所和圖書資訊研究所成立「學習資訊專業學院」，進行有系統且跨領域整合，其中不乏得過國內諸多重要獎項之學者，如教育部國家講座、教育部學術獎、教育部師鐸獎、科技部傑出研究獎、科技部吳大猷獎，師資陣容非常堅強。
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {  }
}
</script>

<style>
/* main page */
html{
  background-color:navajowhite;
}

#title-words{
  font-size: 30px;
  text-align: center;
  color: white;
}

#main-picture{
  display: block;
  margin: 20px auto;
  width: 80%;
}

.main-par {
  color: #7a7a7a;
  font-size: 16px;
  text-align: center;
  vertical-align: baseline;
  line-height: 1.5;
  margin: 10px 20px;
  background: linear-gradient(0deg, #fcca8d, #ffffff);
  border-radius: 10px;
}

</style>