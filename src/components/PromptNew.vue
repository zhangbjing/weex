<template>
    <div class="prompt">
        <image class="promptNew" src='/static/images/BG-IMG-new.png'></image>
        <button class="prompt-btn">好的</button>
    </div>
</template>
<script>
export default {
    name: 'PromptNew',
    data () {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .prompt{
        width: 100%;
        height: 100%;
        .promptNew{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .prompt-btn{
            position: absolute;
            left: 50%;
            bottom: 7%;
            transform: translate(-50%, -50%);
            padding: 2% 16%;
            border: 4px solid #1BA7D8;
            background: none;
            border-radius: 10px;
            color: #1BA7D8;
            font-size: 30px;
            outline: none;
        }
    }
</style>

