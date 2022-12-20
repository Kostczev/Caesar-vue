<template>
   <div class="caesar">
      <div class="caeser-text">
         <div class="caeser-text__column">
            <h2>Шифр Цезаря</h2>
            <textarea class="rounded-border" placeholder="Введите текст" v-model="text"></textarea>
         </div>
         <div class="caeser-text__column">
            <h2>Результат</h2>
            <textarea class="rounded-border" placeholder="Итог" disabled v-model="textCipher"></textarea>
         </div>
      </div>
      <div class="caeser-down">
         <span>Сдвиг:</span>
         <input class="rounded-border" placeholder="Введите число" type="number" v-model="shift">
         <div class="space"></div>
         <button class="rounded-border" @click="encrypt">Зашифровать</button>
         <button class="rounded-border" @click="decrypt">Разшифровать</button>
      </div>
   </div>
</template>

<script>
   export default {
      name: 'Caeser',
      mounted() {
         this.createAlphabet()
      },
      data() {
         return {
            text: '',
            textCipher: '',
            shift: '',
            alphabetsArray: ['абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
            , 'abcdefghijklmnopqrstuvwxyz'],
            alphabets: '',
            alphabetsCipher: ''
         }
      },
      methods: {
         encrypt() {
            this.alphabetsCipher = this.shiftArray( this.alphabetsArray, +this.shift );
            this.textCipher = this.cryptText( this.text, this.alphabets, this.alphabetsCipher );
         },
         decrypt() {
            this.alphabetsCipher = this.shiftArray( this.alphabetsArray, +this.shift );
            this.textCipher = this.cryptText( this.text, this.alphabetsCipher, this.alphabets );
         },
         createAlphabet() {
            this.alphabetsArray.forEach(array => {
               this.alphabets += array.concat(array.toUpperCase())
            });
         },
         shiftArray(arrays, num) {
            let alphabetsCipher = '';
            arrays.forEach(array => {
               let maxNum = num % array.length;
               let newArray = array.slice(maxNum).concat(array.slice(0, maxNum));
               alphabetsCipher += newArray.concat(newArray.toUpperCase());
            });
            return alphabetsCipher;
         },
         cryptText(text, alphabets, alphabetsCipher) {
            let result = '';
            let textArray = text.split('');
            textArray.forEach(element => {
               let index = alphabets.indexOf(element);
               if( index == -1 ) {
                  result += element;
               } else {
                  result += alphabetsCipher[index];
               }
            });
            return result;
         }
      }      
   }
</script>

<style>
   .caesar {
      margin: -1rem;
   }
   .caeser-text {
      display: flex;
      justify-content: center;
      margin-bottom: 1.5rem;
   }
   .caeser-text__column {
      text-align: left;
      margin: 0 1rem;
      width: 100%;
   }
   textarea {
      width: calc(100% - 1rem);
      height: 250px;
      resize: none;
   }
   .caeser-down {
      display: flex;
      text-align: left;
      align-items: center;
   }
   span {
      padding: 0 .5rem 0 1rem;
   }
   .space {
      flex: 1 1 auto;
   }
   button {
      margin: 0 1rem;
   }
   
   .rounded-border {
      border: 1px solid #000;
      border-radius: .5rem;
      padding: .5rem;
   }
</style>