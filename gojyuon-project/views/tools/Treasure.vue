<template>
    <h4 style="text-align:center">收藏庫</h4>

    <div class="responsive">
        <div class="gallery">
            <img src="treasure/book_madousyo_necronomicon.png">
            <div class="desc">古老的魔法書</div>
        </div>
    </div>


    <div class="responsive">
        <div class="gallery">
            <img src="treasure/tsue_sennin.png">
            <div class="desc">破爛的手杖</div>
        </div>
    </div>

    <div class="responsive">
        <div class="gallery">
            <img src="treasure/fantasy_crystal_skull.png">
            <div class="desc">水晶骷髏頭</div>
        </div>
    </div>

    <div class="responsive">
        <div class="gallery">
            <img src="treasure/game_ken_maken.png">
            <div class="desc">魔劍</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
div.gallery {
  border: 1px solid #ccc;
  width: 60%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
}

div.gallery:hover {
  border: 1px solid #777;
}

div.gallery img {
  width: 100px;
  height: auto;
}

div.desc {
  padding: 10px;
  text-align: center;
}

* {
  box-sizing: border-box;
}

.responsive {
  padding: 0 6px;
  margin: 0 auto;
  align-items: center;
  width: 100%;
}

</style>