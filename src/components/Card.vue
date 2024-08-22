<template>
    <div class="card">
        <div class="card-header">
            <slot name="card-header"></slot>
        </div>
        <div class="card-body">
            <slot name="card-body"></slot>
        </div>
        <div class="card-footer">
            <slot name="card-footer"></slot>
        </div>
    </div>
</template>
<script>


export default {
    name: 'CardComp'
}
</script>
<style scoped>
    .card {
    width: 18rem;
    font-family: "Mate SC", serif;
  font-weight: 400;
  font-style: normal;
}

.card {
font-family: Georgia, 'Times New Roman', Times, serif;
/* border: 1px solid rgb(111, 48, 15); */
border-radius: 0px !important;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
overflow: hidden;
/*position: relative;*/
scale: 1;
animation: easeIn 1s ease-out forwards;
}

.card:hover {
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
transition: 0.5s;
transform: scale(1.01);
}

.card img {
width: 100%;
height: auto;
border-radius: 0px !important;
background: #fff;
}

img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
}

.card-header, .card-footer {
    background: #fff;
}
.card-body {
padding: 16px;
}

.card-title {
font-size: 1.25rem;
margin: 0 0 8px;
}





.card-text {
margin: 0 0 8px;
}

.card-description{
display: none;
width: 100%;

}

</style>