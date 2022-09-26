<template>

    <!-- Small - Medium -->
    <div class="ssm:w-[90%] md:hidden w-[80%] mx-auto my-[40px] bg-main-dark drop-shadow-2xl border-solid border-b-[5px] border-accent border-opacity-100">
        
        <!-- Image -->
        <div class="ssm:hidden">
            <a :href=gitLink target="_blank">
                <img class=" w-[100%]  opacity-50 hover:opacity-100 object-cover " :src=imageURL alt="">
            </a>
        </div>
        

        <!-- Content Container -->
        <div class=" mx-[5px] p-[20px] bg-inherit">

            <!-- Type -->
            <p class="select-none text-[18px] text-accent bg-inherit">Featured Project:</p>

            <!-- Title -->
            <h2 class="select-none hover:text-accent text-[25px] mb-[20px] text-main font-semibold bg-inherit ">{{title}}</h2>
        
            <!-- Description -->
            <p class="select-none  text-main text-small bg-inherit mb-[5px]">
                {{description}}
            </p>

            <!-- Language Tags -->
            <div class="bg-inherit">
                <ul class="w-[100%] flex flex-row justify-start bg-inherit mb-[10px] flex-wrap">
                    <li class="select-none bg-inherit text-main opacity-50 mx-[20px] first: ml-0 " v-for="lang in languages">{{lang}}</li>
                </ul>
            </div>

            <!-- Links -->
            <div class=" flex flex-row justify-start bg-inherit">

                <a class="bg-inherit" :href=gitLink target="_blank">
                    <svg class="bg-inherit mr-3 fill-main hover:fill-accent" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50" width="35px" height="50px">
                        <path
                            d="M46.794,22.088L27.912,3.206C27.108,2.402,26.054,2,25,2s-2.108,0.402-2.912,1.206L18.354,6.94l4.624,4.624c1.533-0.902,3.533-0.709,4.85,0.607c1.316,1.316,1.509,3.316,0.607,4.85l4.543,4.543c1.533-0.902,3.533-0.709,4.85,0.607c1.562,1.562,1.562,4.095,0,5.657c-1.562,1.562-4.095,1.562-5.657,0c-1.316-1.316-1.509-3.316-0.607-4.85l-4.543-4.543c-0.324,0.19-0.666,0.33-1.021,0.421v12.285c1.722,0.446,3,1.997,3,3.859c0,2.209-1.791,4-4,4s-4-1.791-4-4c0-1.862,1.278-3.413,3-3.859V18.857c-0.669-0.173-1.305-0.505-1.828-1.028c-1.316-1.316-1.509-3.316-0.607-4.85L16.94,8.354L3.206,22.088c-1.608,1.608-1.608,4.215,0,5.823l18.882,18.882C22.892,47.598,23.946,48,25,48s2.108-0.402,2.912-1.206l18.882-18.882C48.402,26.304,48.402,23.696,46.794,22.088z"
                        />
                    </svg>
                </a>

                <a class="bg-inherit" :href=exLink target="_blank" v-if="exLink!=''">
                    <svg class="bg-inherit mr-3 stroke-main hover:stroke-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40px" height="50px">
                        <path fill="none" stroke-miterlimit="1" stroke-width="2.5"
                            d="M20 12v7c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h7M20 10L20 4 14 4M20 4L9 15" 
                        />
                    </svg>
                </a>

            </div>

        </div>

        

        

    </div>

    <!-- Large -->
    <div v-if="flip" class="nav-sm:hidden flex flex-row relative w-2/3 h-[400px] mx-auto my-20">

        <div class="w-4/6 rounded-lg bg-accent z-0">

            <img class=" w-full rounded-lg  opacity-50 hover:opacity-100" :src=imageURL alt="">

        </div>

        <div class="flex flex-col relative w-3/6 h-[400px] justify-center ">

            <!-- Type -->
            <p class=" text-[18px] text-accent text-right">Featured Project:</p>

            <!-- Title -->
            <h2 class="text-[2.2rem] text-main font-semibold text-right">{{title}}</h2>

            <!-- Language Tags -->
            <div >
                <ul class=" w-full flex flex-row justify-end">
                    <li class="ml-3 text-main opacity-50" v-for="lang in languages">{{lang}}</li>

                </ul>

            </div>

            <!-- Description -->
            <p class=" bg-main-dark py-2 pr-2 ml-[-65px] my-[15px]  w-[120%] text-main text-small text-right rounded-r-lg rounded-l-md z-10">
                {{description}}
            </p>



            <!-- Links -->
            <div class=" flex flex-row justify-end ">

                <a :href=gitLink target="_blank">
                    <svg class="mr-3 fill-main hover:fill-accent hover:scale-105" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50" width="35px" height="50px">
                        <path
                            d="M46.794,22.088L27.912,3.206C27.108,2.402,26.054,2,25,2s-2.108,0.402-2.912,1.206L18.354,6.94l4.624,4.624c1.533-0.902,3.533-0.709,4.85,0.607c1.316,1.316,1.509,3.316,0.607,4.85l4.543,4.543c1.533-0.902,3.533-0.709,4.85,0.607c1.562,1.562,1.562,4.095,0,5.657c-1.562,1.562-4.095,1.562-5.657,0c-1.316-1.316-1.509-3.316-0.607-4.85l-4.543-4.543c-0.324,0.19-0.666,0.33-1.021,0.421v12.285c1.722,0.446,3,1.997,3,3.859c0,2.209-1.791,4-4,4s-4-1.791-4-4c0-1.862,1.278-3.413,3-3.859V18.857c-0.669-0.173-1.305-0.505-1.828-1.028c-1.316-1.316-1.509-3.316-0.607-4.85L16.94,8.354L3.206,22.088c-1.608,1.608-1.608,4.215,0,5.823l18.882,18.882C22.892,47.598,23.946,48,25,48s2.108-0.402,2.912-1.206l18.882-18.882C48.402,26.304,48.402,23.696,46.794,22.088z"
                        />
                    </svg>
                </a>

                <a :href=exLink target="_blank" v-if="exLink!=''">
                    <svg class="mr-3 stroke-main hover:stroke-accent hover:scale-105" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40px" height="50px">
                        <path fill="none" stroke-miterlimit="1" stroke-width="2.5"
                            d="M20 12v7c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h7M20 10L20 4 14 4M20 4L9 15" 
                        />
                    </svg>
                </a>

            </div>


        </div>


    </div>

    <div v-else class="nav-sm:hidden flex flex-row relative w-2/3 h-[400px] mx-auto my-20">

        <div class="flex flex-col relative w-3/6 h-[400px] justify-center ">

            <!-- Type -->
            <p class=" text-[18px] text-accent">Featured Project:</p>

            <!-- Title -->
            <h2 class="text-[2.2rem] text-main font-semibold">{{title}}</h2>

            <!-- Language Tags -->
            <div >
                <ul class=" w-full flex flex-row justify-start">
                    <li class="mr-3 text-main opacity-50" v-for="lang in languages">{{lang}}</li>

                </ul>

            </div>

            <!-- Description -->
            <p class=" bg-main-dark py-2 pl-2 ml-[-7px] my-[15px]  w-[120%] text-main text-small rounded-r-lg rounded-l-md z-10">
                {{description}}
            </p>



            <!-- Links -->
            <div class=" flex flex-row justify-start ">

                <a :href=gitLink target="_blank">
                    <svg class="mr-3 fill-main hover:fill-accent" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50" width="35px" height="50px">
                        <path
                            d="M46.794,22.088L27.912,3.206C27.108,2.402,26.054,2,25,2s-2.108,0.402-2.912,1.206L18.354,6.94l4.624,4.624c1.533-0.902,3.533-0.709,4.85,0.607c1.316,1.316,1.509,3.316,0.607,4.85l4.543,4.543c1.533-0.902,3.533-0.709,4.85,0.607c1.562,1.562,1.562,4.095,0,5.657c-1.562,1.562-4.095,1.562-5.657,0c-1.316-1.316-1.509-3.316-0.607-4.85l-4.543-4.543c-0.324,0.19-0.666,0.33-1.021,0.421v12.285c1.722,0.446,3,1.997,3,3.859c0,2.209-1.791,4-4,4s-4-1.791-4-4c0-1.862,1.278-3.413,3-3.859V18.857c-0.669-0.173-1.305-0.505-1.828-1.028c-1.316-1.316-1.509-3.316-0.607-4.85L16.94,8.354L3.206,22.088c-1.608,1.608-1.608,4.215,0,5.823l18.882,18.882C22.892,47.598,23.946,48,25,48s2.108-0.402,2.912-1.206l18.882-18.882C48.402,26.304,48.402,23.696,46.794,22.088z"
                        />
                    </svg>
                </a>

                <a :href=exLink target="_blank" v-if="exLink!=''">
                    <svg class="mr-3 stroke-main hover:stroke-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40px" height="50px">
                        <path fill="none" stroke-miterlimit="1" stroke-width="2.5"
                            d="M20 12v7c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h7M20 10L20 4 14 4M20 4L9 15" 
                        />
                    </svg>
                </a>

            </div>


        </div>

        <div class="w-4/6 h-[400px] rounded-lg bg-accent z-0">

            <img class=" w-full h-[400px]   opacity-50 hover:opacity-100" :src=imageURL alt="">

        </div>
    </div>




</template>

<script>

    export default{
        name: "tile",
        props: {

            flip: {
                type: Boolean,
                default: false
            },

            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            languages: {
                type: Array,
                required: true
            },
            gitLink:{
                type: String,
                required: true
            },
            exLink:{
                type: String,
                required: false
            },
            imageURL:{
                type: String,
                required: true
            }
        }
        
    }
</script>