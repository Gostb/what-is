<template>
  <div class="semalt">
    <div class="semalt__header--bg">
      <div class="semalt__header" ref="topMouseOver">
        <img src="~assets/img/header/tilds-1.png" class="tilds-1" alt="blue-cloud">
        <img src="~assets/img/header/tilds-2.png" class="tilds-2" alt="blue-cloud">
        <img src="~assets/img/header/blue-cloud.png" class="blue-cloud" alt="blue-cloud">
        <img src="~assets/img/header/light-blue-cloud.png" class="light-blue-cloud" alt="light-blue-cloud">
        <img src="~assets/img/header/left-bush.png" class="left-bush" alt="left-bush">
        <!--<img src="~assets/img/header/man-case.png" class="man-case" alt="man-case">-->
        <img src="~assets/img/header/rocket.png" class="rocket" alt="rocket">
        <img src="~assets/img/header/right-girl.png" class="right-girl" alt="right-girl">

        <div class="container flex flex-around flex-bottom">
          <div class="semalt__header__title">
            <h1 class="title s-basic" v-html="getCustomWords('6358', 'blue-bg')"></h1>
          </div>
          <div class="semalt__header__video" @click="onCleverJump('top-video')">
            <div class="click-show" v-if="!showVideo" @click="showVideo = true">
              <img src="~assets/img/header/youtube-icon.svg" alt="youtube icon" class="youtube-icon">
            </div>

            <div v-else class="vimeo">
              <iframe class="video"
                      src="https://www.youtube.com/embed/A57sXzq2p-c?autoplay=1&amp;"
                      frameborder="0"
                      style="width: 100%;"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
        <div class="semalt__header__arrow-down" v-s-smooth-scroll="'#scroll-bottom'" scroll="scroll-top">
          <i class="fas fa-angle-double-down arrow-down"></i>
        </div>
      </div>
    </div>

    <div class="semalt__numbers">
      <div class="container">
        <div class="semalt__numbers__list flex flex-between">

          <div class="numbers__list--item number-1 left-to-right">
            <div class="item--img">
              <img src="~assets/img/numbers/more-then-1.png" alt="more-1">
            </div>
            <p class="item--header">{{$t('6359')}}</p>
            <h5 class="item--title" v-html="$t('6313')"></h5>
            <p class="item--description">{{$t('6314')}}</p>
          </div>

          <div class="numbers__list--item number-2 left-to-right">
            <div class="item--img">
              <img src="~assets/img/numbers/up-to-1.png" alt="up-1">
            </div>
            <p class="item--header">{{$t('6360')}}</p>
            <h5 class="item--title"><span class="figure">60 000</span></h5>
            <p class="item--description">{{$t('6316')}}</p>
          </div>

          <div class="numbers__list--item number-3 right-to-left">
            <div class="item--img">
              <img src="~assets/img/numbers/up-to-2.png" alt="up-2">
            </div>
            <p class="item--header">{{$t('6361')}}</p>
            <h5 class="item--title"><span class="figure">20</span></h5>
            <p class="item--description">{{$t('6318')}}</p>
          </div>

          <div class="numbers__list--item number-4 right-to-left">
            <div class="item--img">
              <img src="~assets/img/numbers/more-then-2.png" alt="more-2">
            </div>
            <p class="item--header">{{$t('6362')}}</p>
            <h5 class="item--title"><span class="figure">100</span></h5>
            <p class="item--description">{{$t('6319')}}</p>
          </div>

        </div>
      </div>
    </div>

    <div class="semalt__why">
      <div class="container">

        <div class="semalt__why__header">
          <div class="semalt__why__header__title">
            <h2 class="title" v-html="$t('6320')"></h2>
          </div>
          <div class="semalt__why__header__description">
            <p class="description">{{$t('6321')}}</p>
          </div>
        </div>

        <div class="semalt__why__content">
          <div class="semalt__why__content__list">
            <div class="semalt__why__content__list--item .why-item-1">
              <div class="item__left why-left">
                <div class="item--img">
                  <img src="~assets/img/why/control-your-bussiness.png" alt="control">
                </div>
                <div class="item__left--description">
                  <p class="description">{{$t('6322')}}</p>
                </div>
              </div>
              <div class="item__right why-right">
                <h5 class="title"><i class="fas fa-chart-pie"></i>{{$t('6406')}}</h5>
                <p class="text">{{$t('6323')}}</p>
              </div>
            </div>

            <div class="semalt__why__content__list--item .why-item-2">
              <div class="item__left why-left">
                <div class="item--img">
                  <img src="~assets/img/why/reach-the-top.png" alt="top">
                </div>
                <div class="item__left--description">
                  <p class="description">{{$t('6324')}}</p>
                </div>
              </div>
              <div class="item__right why-right">
                <h5 class="title"><i class="fas fa-boxes"></i>{{$t('6325')}}</h5>
                <p class="text">{{$t('6326')}}</p>
              </div>
            </div>

            <div class="semalt__why__content__list--item .why-item-3">
              <div class="item__left why-left">
                <div class="item--img">
                  <img src="~assets/img/why/visibility-brings-success.png" alt="success">
                </div>
                <div class="item__left--description">
                  <p class="description">{{$t('6328')}}</p>
                </div>
              </div>
              <div class="item__right why-right">
                <h5 class="title"><i class="fas fa-video"></i>{{$t('6407')}}</h5>
                <p class="text">{{$t('6329')}}</p>
              </div>
            </div>

            <div class="semalt__why__content__list--item .why-item-4">
              <div class="item__left why-left">
                <div class="item--img">
                  <img src="~assets/img/why/bussiness-next-level.png" alt="next-level">
                </div>
                <div class="item__left--description">
                  <p class="description">{{$t('6330')}}</p>
                </div>
              </div>
              <div class="item__right why-right">
                <h5 class="title"><i class="fas fa-code"></i>{{$t('6408')}}</h5>
                <p class="text">{{$t('6331')}}</p>
              </div>
            </div>

          </div>

          <s-button target="_blank"
                    element="a"
                    href="https://semalt.com/price"
                    @click="onCleverJump('get-a-full-stack-service-button')"
                    class="why--button"
                    type="primary"
                    size="large"
          >{{$t('6332')}}
          </s-button>

        </div>
      </div>
    </div>

    <div class="semalt__benefits--bg">
      <div class="semalt__benefits">
        <div class="container">
          <div class="semalt__benefits__title">
            <h2 class="title s-basic" v-html="$t('6333')"></h2>
          </div>

          <div class="semalt__benefits__content">
            <div class="content--item benef-left content--item-1">
              <div class="item--image">
                <img src="~assets/img/benefits/proffesionals.png" alt="professionals">
              </div>
              <div class="item--bg">
                <h5 class="item--title">{{$t('6334')}}</h5>
                <p class="item--description">{{$t('6335')}}</p>
              </div>
            </div>

            <div class="content--item benef-left content--item-2">
              <div class="item--image">
                <img src="~assets/img/benefits/custmer-trust.png" alt="trust">
              </div>
              <div class="item--bg">
                <h5 class="item--title">{{$t('6336')}}</h5>
                <p class="item--description">{{$t('6337')}}</p>
              </div>
            </div>

            <div class="content--item benef-left content--item-3">
              <div class="item--image">
                <img src="~assets/img/benefits/best-prices.png" alt="prices">
              </div>
              <div class="item--bg">
                <h5 class="item--title">{{$t('6338')}}</h5>
                <p class="item--description">{{$t('6339')}}</p>
              </div>
            </div>

            <div class="content--item benef-left content--item-4">
              <div class="item--image">
                <img src="~assets/img/benefits/discounts.png" alt="discounts">
              </div>
              <div class="item--bg">
                <h5 class="item--title">{{$t('6340')}}</h5>
                <p class="item--description">{{$t('6341')}}</p>
              </div>
            </div>

            <div class="content--item benef-left content--item-5">
              <div class="item--image">
                <img src="~assets/img/benefits/support.png" alt="support">
              </div>
              <div class="item--bg">
                <h5 class="item--title">{{$t('6364')}}</h5>
                <p class="item--description">{{$t('6342')}}</p>
              </div>
            </div>

            <div class="content--item benef-left content--item-6">
              <div class="item--image">
                <img src="~assets/img/benefits/seo.png" alt="seo">
              </div>
              <div class="item--bg">
                <h5 class="item--title">{{$t('6343')}}</h5>
                <p class="item--description">{{$t('6344')}}</p>
              </div>
            </div>
          </div>
        </div>
        <img src="~assets/img/benefits/girls-cup.gif" class="girls-cup" alt="girls-cup">
      </div>
    </div>

    <div class="semalt__level--bg">
      <div class="semalt__level" id="scroll-bottom">
        <div class="semalt__level__title">
          <h2 class="title s-basic" v-html="$t('6345')"></h2>
          <p class="title--description">{{$t('6346')}}</p>
        </div>
        <s-button target="_blank"
                  element="a"
                  href="https://semalt.com/price"
                  class="level--button"
                  type="primary"
                  size="large"
                  @click="onCleverJump('button-start-now')"
        >Start now
        </s-button>
      </div>
      <!--<img src="~assets/img/level/up-bg.gif" alt="up-bg">-->
    </div>

    <div class="semalt__products">

      <div class="semalt__products--title">
        <h3 class="title s-basic">{{$t('355')}}</h3>
      </div>

      <div id="tabs" class="container">

        <div class="tabs">
          <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">
            <i class="fas fa-box-open"></i>{{$t('356')}}</a>

          <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">
            <i class="fas fa-boxes"></i>{{$t('360')}}</a>

          <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">
            <i class="fas fa-chart-pie"></i>{{$t('363')}}</a>

          <!--<a v-on:click="activetab=4" v-bind:class="[ activetab === 4 ? 'active' : '' ]">-->
          <!--<i class="fas fa-video"></i>{{$t('365')}}</a>-->

          <a v-on:click="activetab=5" v-bind:class="[ activetab === 5 ? 'active' : '' ]">
            <i class="fas fa-code"></i>{{$t('367')}}</a>
        </div>


        <div class="content">
          <div class="content-image" v-if="activetab === 1">
            <img src="~assets/img/products/rocket-man.png" alt="man">
          </div>
          <div class="content-image" v-if="activetab === 2">
            <img src="~assets/img/products/rocket.png" alt="man">
          </div>
          <div class="content-image" v-if="activetab === 3">
            <img src="~assets/img/products/banner-bg.png" alt="man">
          </div>
          <div class="content-image" v-if="activetab === 5">
            <img src="~assets/img/products/bg-worker.png" alt="man">
          </div>
          <div v-if="activetab === 1" class="tabcontent">
            <div class="auto-seo">
              <h4>{{$t('356')}}</h4>
              <p>{{$t('6347')}}
              </p>
              <div class="buttons">
                <s-button element="a"
                          target="_blank"
                          href="https://semalt.com/price#AutoSeo"
                          class="tab-btn btn-try"
                          type="primary"
                          @click="onCleverJump('tabs-button-try-for-099')"
                          size="large"
                >Try For 0.99$
                </s-button>
                <s-button element="a"
                          class="tab-btn btn-light"
                          type="primary"
                          @click="onCleverJump('tabs-button-learn-more')"
                          size="large"
                          href="https://semalt.com/autoseo"
                          target="_blank"
                >Learn More
                </s-button>
              </div>
            </div>
          </div>
          <div v-if="activetab === 2" class="tabcontent">
            <div class="full-seo">
              <h4>{{$t('360')}}</h4>
              <p>{{$t('6348')}}</p>
              <div class="buttons">
                <s-button element="a"
                          target="_blank"
                          href="https://semalt.com/price#FullSeo"
                          class="tab-btn btn-try"
                          type="primary"
                          @click="onCleverJump('tabs-button-try-for-099')"
                          size="large"
                >Try for $0.99
                </s-button>
                <s-button element="a"
                          class="tab-btn btn-light"
                          type="primary"
                          @click="onCleverJump('tabs-button-learn-more')"
                          size="large"
                          href="https://semalt.com/fullseo"
                          target="_blank"
                >Learn more
                </s-button>
              </div>
            </div>
          </div>
          <div v-if="activetab === 3" class="tabcontent">
            <div class="web-analytics">
              <h4>{{$t('363')}}</h4>
              <p>{{$t('6350')}}
              </p>
              <div class="buttons">
                <s-button target="_blank"
                          element="a"
                          href="https://semalt.com/addproject"
                          class="tab-btn btn-try"
                          type="primary"
                          @click="onCleverJump('tabs-button-try-for-099')"
                          size="large"
                >Try for $0.99
                </s-button>
                <s-button element="a"
                          href="https://semalt.com/analytics"
                          target="_blank"
                          class="tab-btn btn-light"
                          type="primary"
                          @click="onCleverJump('tabs-button-learn-more')"
                          size="large"
                >Learn more
                </s-button>
              </div>
            </div>
          </div>
          <div v-if="activetab === 5" class="tabcontent">
            <div class="web-dev">
              <h4>{{$t('367')}}</h4>
              <p>{{$t('6352')}}
              </p>
              <div class="buttons">
                <s-button class="tab-btn btn-try"
                          element="a"
                          href="https://dev.semalt.com/"
                          target="_blank"
                          type="primary"
                          @click="onCleverJump('tabs-button-try-for-099')"
                          size="large"
                >Try for $0.99
                </s-button>
                <s-button element="a"
                          href="https://dev.semalt.com/?"
                          target="_blank"
                          class="tab-btn btn-light"
                          type="primary"
                          @click="onCleverJump('tabs-button-learn-more')"
                          size="large"
                >Learn more
                </s-button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="mobile__collapse">
        <div class="s-title" v-s-collapse="'Title1'"><i class="fas fa-box-open"></i><span class="title">AutoSEO</span>
        </div>
        <div class="s-content" data-collapse="Title1" data-collapse-group="group1" aria-expanded="true">
          <h4>{{$t('356')}}</h4>
          <p>{{$t('6347')}}
          </p>
          <div class="buttons">
            <s-button element="a"
                      target="_blank"
                      href="https://semalt.com/price#AutoSeo"
                      class="tab-btn btn-try"
                      type="primary"
                      @click="onCleverJump('tabs-button-try-for-099')"
                      size="large"
            >Try For 0.99$
            </s-button>
            <s-button element="a"
                      class="tab-btn btn-light"
                      type="primary"
                      @click="onCleverJump('tabs-button-learn-more')"
                      size="large"
                      href="https://semalt.com/autoseo"
                      target="_blank"
            >Learn More
            </s-button>
          </div>
        </div>

        <div class="s-title" v-s-collapse="'Title2'" aria-expanded="false"><i class="fas fa-boxes"></i><span
               class="title">FullSEO</span></div>
        <div class="s-content" data-collapse="Title2" data-collapse-group="group1" aria-expanded="false">
          <h4>{{$t('360')}}</h4>
          <p>{{$t('6348')}}</p>
          <div class="buttons">
            <s-button element="a"
                      target="_blank"
                      href="https://semalt.com/price#FullSeo"
                      class="tab-btn btn-try"
                      type="primary"
                      @click="onCleverJump('tabs-button-try-for-099')"
                      size="large"
            >Try for $0.99
            </s-button>
            <s-button element="a"
                      class="tab-btn btn-light"
                      type="primary"
                      @click="onCleverJump('tabs-button-learn-more')"
                      size="large"
                      href="https://semalt.com/fullseo"
                      target="_blank"
            >Learn more
            </s-button>
          </div>
        </div>

        <div class="s-title" v-s-collapse="'Title3'" aria-expanded="false"><i class="fas fa-chart-pie"></i><span
               class="title">Website analytics</span></div>
        <div class="s-content" data-collapse-group="group1" aria-expanded="false" data-collapse="Title3">
          <h4>{{$t('363')}}</h4>
          <p>{{$t('6350')}}
          </p>
          <div class="buttons">
            <s-button target="_blank"
                      element="a"
                      href="https://semalt.com/addproject"
                      class="tab-btn btn-try"
                      type="primary"
                      @click="onCleverJump('tabs-button-try-for-099')"
                      size="large"
            >Try for $0.99
            </s-button>
            <s-button element="a"
                      href="https://semalt.com/analytics"
                      target="_blank"
                      class="tab-btn btn-light"
                      type="primary"
                      @click="onCleverJump('tabs-button-learn-more')"
                      size="large"
            >Learn more
            </s-button>
          </div>
        </div>

        <div class="s-title" v-s-collapse="'Title4'" aria-expanded="false"><i class="fas fa-code"></i><span
               class="title">Web development</span></div>
        <div class="s-content" data-collapse-group="group1" aria-expanded="false" data-collapse="Title4">
          <h4>{{$t('367')}}</h4>
          <p>{{$t('6352')}}
          </p>
          <div class="buttons">
            <s-button class="tab-btn btn-try"
                      element="a"
                      href="https://dev.semalt.com/"
                      target="_blank"
                      type="primary"
                      @click="onCleverJump('tabs-button-try-for-099')"
                      size="large"
            >Try for $0.99
            </s-button>
            <s-button element="a"
                      href="https://dev.semalt.com/?"
                      target="_blank"
                      class="tab-btn btn-light"
                      type="primary"
                      @click="onCleverJump('tabs-button-learn-more')"
                      size="large"
            >Learn more
            </s-button>
          </div>
        </div>
      </div>


    </div>

    <div class="semalt__how-to--bg">
      <div class="semalt__how-to">
        <div class="flex flex-around">
          <div class="semalt__how-to--circle">
            <img src="~assets/img/how-to/circle.png" alt="circle">
          </div>
          <div class="semalt__how-to__text">
            <div class="semalt__how-to__text--title">
              <h2 class="title s-basic" v-html="$t('6353')"></h2>
            </div>
            <div class="semalt__how-to__text__main">
              <div class="semalt__how-to__text__main--subtitle">
                <h3 class="subtitle" v-html="$t('6354')"></h3>
              </div>
              <div class="semalt__how-to__text__main--description">
                <p class="description">
                  {{$t('6355')}}
                </p>
              </div>
              <!--<div class='form__select'>-->
              <!--<s-select class="middle-input" v-if="ifOurs" header-as-value v-model="website" :items="sites" :format-output="(item) => item.site" />-->

              <!--<s-group v-else group="row" :has-error.sync="websiteError" error-text="Website is Required">-->
              <!--<s-input class="middle-input" @keyup.enter="makeRequest" v-model="website" placeholder=""/>-->
              <!--</s-group>-->
              <!--<input @click="makeRequest" type='submit' class="blue-button" :value="$t('1502')">-->
              <!--</div>-->
              <form @submit.prevent>
                <s-group :has-error="hasError" error-text="Enter correct website">
                  <s-input id="id-btn"
                           v-model="input"
                           placeholder="Enter your site URL here"/>
                </s-group>
                <s-button class="analyze"
                          type="primary"
                          @click="setData"
                          size="large"
                >{{$t('6356')}}
                </s-button>
              </form>
            </div>
          </div>
        </div>
        <img src="~assets/img/how-to/right-bush.png" alt="bush" class="right-bush">
      </div>
    </div>

    <s-section-clients/>

  </div>
</template>

<script>
import axios from 'axios'

const GET_USER = '/api/v1/get/user?scopes=id,email,tel,username'

export default {
	layout: 'landing',
	data() {
		return {
			showVideo: false,
			activetab: 1,
			sites: [],
			customWords: {
				6358: [
					'What',
					'Was',
					'¿Qué',
					'Qu’est-ce',
					'Cos\'è',
					'Wat',
					'O que',
					'Nedir',
					'什么',
				]
			},
			requestDataUser: null,
			input: '',
			// errorText: 'enter correct website',
			hasError: false,
		}
	},
	mounted() {
		console.log(process.env.api)
		this.$refs.topMouseOver.addEventListener('mousemove', this.onRightMouseMove)

		this.onResize()
		window.addEventListener('resize', this.onResize)

		axios.get(GET_USER)
			.then(response => {
				if (response.data.error === null) {
					this.requestDataUser = response.data.result.user
				}
			})
			.catch(e => {
				this.errors.push(e)
			})

	},
	methods: {
		onResize() {
			let spanArr
			let numbLeft
			let numbRight
			let whyLeft
			let whyRight
			let benefitsRight

			const onScroll = () => {
				// TITLES
				for (let i = 0; i < spanArr.length; i++) {
					if (window.innerHeight - 200 >= spanArr[i].getBoundingClientRect().top) {
						spanArr[i].className = 'blue-bg anim'
					}
				}

				// NUMBERS
				for (let i = 0; i < numbLeft.length; i++) {
					if (window.innerHeight - 200 >= numbLeft[i].getBoundingClientRect().top) {
						numbLeft[i].className = 'numbers__list--item left-to-right animation-left'
					}
				}
				for (let i = 0; i < numbRight.length; i++) {
					if (window.innerHeight - 200 >= numbRight[i].getBoundingClientRect().top) {
						numbRight[i].className = 'numbers__list--item right-to-left animation-right'
					}
				}

				//WHY
				for (let i = 0; i < whyLeft.length; i++) {
					if (window.innerHeight - 200 >= whyLeft[i].getBoundingClientRect().top) {
						whyLeft[i].className = 'item__left why-left why-left-animation'
					}
				}
				for (let i = 0; i < whyRight.length; i++) {
					if (window.innerHeight - 200 >= whyRight[i].getBoundingClientRect().top) {
						whyRight[i].className = 'item__right why-right why-right-animation'
					}
				}

				// BENEFITS
				for (let i = 0; i < benefitsRight.length; i++) {
					if (window.innerHeight - 200 >= benefitsRight[i].getBoundingClientRect().top) {
						benefitsRight[i].className = 'content--item benef-left benef-left-animation'
					}
				}
			}


			if (window.innerWidth >= 480) {

				spanArr = document.getElementsByClassName('blue-bg')
				numbLeft = document.getElementsByClassName('left-to-right')
				numbRight = document.getElementsByClassName('right-to-left')
				whyLeft = document.getElementsByClassName('why-left')
				whyRight = document.getElementsByClassName('why-right')
				benefitsRight = document.getElementsByClassName('benef-left')


				for (let i = 0; i < spanArr.length; i++) {
					if (window.innerHeight - 200 >= spanArr[i].getBoundingClientRect().top) {
						spanArr[i].className = 'blue-bg anim'
					}
				}
				window.addEventListener('scroll', onScroll)

			} else {
				window.removeEventListener('scroll', onScroll)

			}
		},
		onRightMouseMove(e) {
			const scena1 = document.querySelector('.tilds-1')
			const {pageX, pageY} = e

			const scena2 = document.querySelector('.tilds-2')
			const scena3 = document.querySelector('.blue-cloud')
			const scena4 = document.querySelector('.light-blue-cloud')
			const scena5 = document.querySelector('.left-bush')

			scena1.style.webkitTransform = 'translateX(' + pageX / 300 + '%) translateY(' + pageY / 300 + '%)';
			scena1.style.transform = 'translateX(' + pageX / 300 + '%) translateY(' + pageY / 300 + '%)';

			scena2.style.webkitTransform = 'translateX(' + -pageX / 400 + '%) translateY(' + -pageY / 400 + '%)';
			scena2.style.transform = 'translateX(' + -pageX / 400 + '%) translateY(' + -pageY / 400 + '%)';

			scena3.style.webkitTransform = 'translateX(' + -pageX / 100 + '%) translateY(' + -pageY / 100 + '%)';
			scena3.style.transform = 'translateX(' + -pageX / 100 + '%) translateY(' + -pageY / 100 + '%)';

			scena4.style.webkitTransform = 'translateX(' + pageX / 100 + '%) translateY(' + pageY / 100 + '%)';
			scena4.style.transform = 'translateX(' + pageX / 100 + '%) translateY(' + pageY / 100 + '%)';

			scena5.style.webkitTransform = 'translateX(' + pageX / 300 + '%) translateY(' + pageY / 300 + '%)';
			scena5.style.transform = 'translateX(' + pageX / 300 + '%) translateY(' + pageY / 300 + '%)';
		},
		getCustomWords(id, className, str) {
			// console.log(str)
			let string = str
			let words = this.customWords[id];

			let phrase = '';
			let spanPhrase = '';
			for (let i = 0; i < words.length; i++) {
				if (string) {
					phrase = string.match(words[i])
					// console.log(phrase)
				} else {
					phrase = this.$t(id).match(words[i]);
					// console.log(phrase)
				}
				if (!phrase) continue;

				spanPhrase = '<span class="' + className + '">' + phrase[0] + '</span>';
				// console.log(this.$t(id))
				if (string) {
					return string.replace(phrase, spanPhrase);
				} else return this.$t(id).replace(phrase, spanPhrase);

			}

			return this.$t(id);

		},
		validateInputWebsite() {
			// Clear error
			this.hasError = false

			let res = this.$frontend.regex.website(this.input);

			if (res !== true) {
				this.hasError = true
				// this.errorText = res
			}
		},
		setData() {
			this.validateInputWebsite()
			if (!this.hasError && this.requestDataUser) {
				// console.log(1)
				CleverJump.hit('click', 'what-is-semalt-site-analyzer-authorized-button')
				document.location.href = 'https://semalt.com/addproject/?url=' + this.input
			} else {
				// console.log(2)
				CleverJump.hit('click', 'what-is-semalt-site-analyzer-not-authorized-button')
				document.location.href = 'https://semalt.com/?s=' + this.input
			}
		},


	},
	watch: {
		input() {
			this.validateInputWebsite()
			console.log(1)
		}
	},

};

</script>

<style lang="less" scoped>

// TITLES ANIMATION

/deep/ .blue-bg {
  display  : inline-block;
  position : relative;
  /*color : #ffffff;*/
  z-index  : 2;
}

/deep/ .anim {
  color      : #ffffff;
  transition : 1.5s;
}

/deep/ .anim:before {
  position            : absolute;
  top                 : 0;
  left                : 0;
  content             : "";
  height              : 100%;
  width               : 0;
  background          : #4b79bb;
  /*transition: width 1s ease-in;*/
  z-index             : -1;
  animation           : left 1s;
  animation-fill-mode : forwards;
}

@keyframes left {
  from {
    width : 0;
  }
  to {
    width : 100%;
  }
}

// END OF TITLE ANIMATION

// NUMBERS ANIMATION

.left-to-right {
  opacity : 0;
}

.animation-left {
  -webkit-transform   : translateX(-120px);
  -moz-transform      : translateX(-120px);
  -ms-transform       : translateX(-120px);
  -o-transform        : translateX(-120px);
  transform           : translateX(-120px);
  -webkit-animation   : left-to-right 1s;
  -o-animation        : left-to-right 1s;
  animation           : left-to-right 1s;
  animation-fill-mode : forwards;
}

.right-to-left {
  opacity : 0;
}

.animation-right {
  -webkit-transform   : translateX(120px);
  -moz-transform      : translateX(120px);
  -ms-transform       : translateX(120px);
  -o-transform        : translateX(120px);
  transform           : translateX(120px);
  -webkit-animation   : right-to-left 1s;
  -o-animation        : right-to-left 1s;
  animation           : right-to-left 1s;
  animation-fill-mode : forwards;
}

@keyframes left-to-right {
  from {
    opacity           : 0;
    -webkit-transform : translateX(-120px);
    -moz-transform    : translateX(-120px);
    -ms-transform     : translateX(-120px);
    -o-transform      : translateX(-120px);
    transform         : translateX(-120px);
  }
  to {
    opacity           : 1;
    -webkit-transform : translateX(0);
    -moz-transform    : translateX(0);
    -ms-transform     : translateX(0);
    -o-transform      : translateX(0);
    transform         : translateX(0);
  }

}

@keyframes right-to-left {
  from {
    opacity           : 0;
    -webkit-transform : translateX(120px);
    -moz-transform    : translateX(120px);
    -ms-transform     : translateX(120px);
    -o-transform      : translateX(120px);
    transform         : translateX(120px);
  }
  to {
    opacity           : 1;
    -webkit-transform : translateX(0);
    -moz-transform    : translateX(0);
    -ms-transform     : translateX(0);
    -o-transform      : translateX(0);
    transform         : translateX(0);
  }

}

// END OF ANIMATED NUMBERS

//  WHY ANIMATION START

.why-left {
  opacity : 0;
}

.why-left-animation {
  -webkit-transform   : translateX(-120px);
  -moz-transform      : translateX(-120px);
  -ms-transform       : translateX(-120px);
  -o-transform        : translateX(-120px);
  transform           : translateX(-120px);
  -webkit-animation   : why-left-animation 1s;
  -o-animation        : why-left-animation 1s;
  animation           : why-left-animation 1s;
  animation-fill-mode : forwards;
}

.why-right {
  opacity : 0;
}

.why-right-animation {
  -webkit-transform   : translateX(-120px);
  -moz-transform      : translateX(-120px);
  -ms-transform       : translateX(-120px);
  -o-transform        : translateX(-120px);
  transform           : translateX(-120px);
  -webkit-animation   : why-right-animation 1s;
  -o-animation        : why-right-animation 1s;
  animation           : why-right-animation 1s;
  animation-fill-mode : forwards;
}

@keyframes why-left-animation {
  from {
    opacity           : 0;
    -webkit-transform : translateX(-120px);
    -moz-transform    : translateX(-120px);
    -ms-transform     : translateX(-120px);
    -o-transform      : translateX(-120px);
    transform         : translateX(-120px);
  }
  to {
    opacity           : 1;
    -webkit-transform : translateX(0);
    -moz-transform    : translateX(0);
    -ms-transform     : translateX(0);
    -o-transform      : translateX(0);
    transform         : translateX(0);
  }

}

@keyframes why-right-animation {
  from {
    opacity           : 0;
    -webkit-transform : translateX(120px);
    -moz-transform    : translateX(120px);
    -ms-transform     : translateX(120px);
    -o-transform      : translateX(120px);
    transform         : translateX(120px);
  }
  to {
    opacity           : 1;
    -webkit-transform : translateX(0);
    -moz-transform    : translateX(0);
    -ms-transform     : translateX(0);
    -o-transform      : translateX(0);
    transform         : translateX(0);
  }

}

//  WHY ANIMATION END

// BENEFITS ANIMATION

.benef-left {
  opacity : 0;
}

.benef-left-animation {
  -webkit-transform   : translateX(-320px);
  -moz-transform      : translateX(-320px);
  -ms-transform       : translateX(-320px);
  -o-transform        : translateX(-320px);
  transform           : translateX(-320px);
  -webkit-animation   : benef-left-animation 1s;
  -o-animation        : benef-left-animation 1s;
  animation           : benef-left-animation 1s;
  animation-fill-mode : forwards;
  /*scale(0)*/
  /*scale(0)*/
  /*scale(0)*/
  /*scale(0)*/
  /*scale(0)*/
}

@keyframes benef-left-animation {
  from {
    -webkit-transform : translateX(-320px);
    -moz-transform    : translateX(-320px);
    -ms-transform     : translateX(-320px);
    -o-transform      : translateX(-320px);
    transform         : translateX(-320px);
    opacity           : 0;
  }
  /*scale(0)*/
  /*scale(0)*/
  /*scale(0)*/
  /*scale(0)*/
  /*scale(0)*/
  to {
    -webkit-transform : translateX(0);
    -moz-transform    : translateX(0);
    -ms-transform     : translateX(0);
    -o-transform      : translateX(0);
    transform         : translateX(0);
    opacity           : 1;
  }
  /*scale(1)*/
  /*scale(1)*/
  /*scale(1)*/
  /*scale(1)*/
  /*scale(1)*/
}

// END OF BENEFITS ANIMATION

.s-basic {
  margin    : 0;
  padding   : 0;
  font-size : 32px;
}

.title--red {
  background  : #f1244a;
  color       : #ffffff;
  line-height : 1;
}

.item--img {
  margin-bottom         : 30px;
  width                 : 100px;
  height                : 100px;
  -webkit-border-radius : 50%;
  -moz-border-radius    : 50%;
  border-radius         : 50%;
  box-shadow            : 0 0 20px 5px #dce3f1;
  img {
    margin-top : 15px;
  }
}

p {
  font-size : 12px;
}

.semalt {
  background-color : #ffffff;
  max-width        : 1920px;
  margin           : 0 auto;
  .semalt__header--bg {
    background : #f2f4fa;
    .semalt__header {
      max-width : 1920px;
      margin    : 0 auto;
      position  : relative;
      height    : 100%;
      .blue-cloud,
      .light-blue-cloud,
      .left-bush,
      .tilds-1,
      .tilds-2,
      .right-girl,
      .rocket {
        position : absolute;
      }
      .tilds-1 {
        left   : 0;
        height : 350px;
      }
      .tilds-2 {
        right  : 0;
        height : 400px;
      }
      .left-bush {
        bottom : 0;
        left   : 0;
      }
      .blue-cloud {
        left : 5%;
        top  : 45%;
      }
      .light-blue-cloud {
        left : 10%;
        top  : 25%;
      }
      .right-girl {
        bottom : 0;
        right  : 5%;
      }
      .rocket {
        bottom : 0;
        right  : 5%;
      }

      &__title {
        width   : 300px;
        padding : 135px 0 153px;
        z-index : 100;
        .title {
          font-size      : 52px;
          line-height    : 60px;
          letter-spacing : 0.06em;
        }
      }
      &__video {
        margin-bottom           : -50px;
        padding-top             : 30px;
        background              : url("~assets/img/header/video-bg.png") no-repeat;
        -webkit-background-size : 100%;
        background-size         : 100%;
        -webkit-border-radius   : 10px;
        -moz-border-radius      : 10px;
        border-radius           : 20px;
        height                  : 345px;
        max-width               : 660px;
        width                   : 100%;
        transition              : all .5s;
        position                : relative;
        z-index                 : 99;
        &:before {
          content    : '';
          position   : absolute;
          background : url("~assets/img/header/man-case.png") no-repeat;
          height     : 250px;
          left       : -210px;
          bottom     : 24px;
          width      : 55%;
        }
        .click-show {
          position                : absolute;
          height                  : 100%;
          width                   : 100%;
          top                     : 50px;
          background              : url("~assets/img/header/video-team.png") center bottom no-repeat;
          -webkit-background-size : 345px cover;
          background-size         : 345px cover;
          margin-top              : 0;
          -webkit-border-radius   : 0 0 15px 15px;
          -moz-border-radius      : 0 0 15px 15px;
          border-radius           : 0 0 15px 15px;
          text-align              : center;
          .youtube-icon {
            height             : 40px;
            margin-top         : calc(50% - 200px);
            display            : inline-block;
            -webkit-transition : .3s;
            -moz-transition    : .3s;
            -ms-transition     : .3s;
            -o-transition      : .3s;
            transition         : .3s;
            &:hover {
              -webkit-transform : scale(1.1);
              -moz-transform    : scale(1.1);
              -ms-transform     : scale(1.1);
              -o-transform      : scale(1.1);
              transform         : scale(1.1);
              cursor            : pointer;
            }
          }
        }
        .video {
          position : absolute;
          width    : 100%;
          height   : 120%;
          top      : 50px;
        }
      }
      &__arrow-down {
        position              : absolute;
        left                  : 15%;
        bottom                : -20px;
        background            : #ffffff;
        -webkit-border-radius : 50%;
        -moz-border-radius    : 50%;
        border-radius         : 50%;
        width                 : 40px;
        height                : 40px;
        text-align            : center;
        .arrow-down {
          line-height        : 40px;
          color              : #f1244a;
          cursor             : pointer;
          -webkit-transition : all .5s;
          -moz-transition    : all .5s;
          -ms-transition     : all .5s;
          -o-transition      : all .5s;
          transition         : all .5s;
          &:hover {
            -webkit-transform : scale(1.2);
            -moz-transform    : scale(1.2);
            -ms-transform     : scale(1.2);
            -o-transform      : scale(1.2);
            transform         : scale(1.2);
          }
        }
      }
    }
  }

  &__numbers {
    margin-top  : 150px;
    overflow    : hidden;
    padding-top : 10px;
    &__list {
      flex-wrap : wrap;
      .numbers__list--item {
        text-align      : center;
        width           : 25%;
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        align-items     : center;
        position        : relative;
        &:before {
          content      : '';
          position     : absolute;
          top          : 0;
          right        : 0;
          height       : 80%;
          border-right : 2px dashed #e8ebf4;
        }
        &:last-of-type:before {
          display : none;
        }
        .item--img {
          margin-bottom         : 30px;
          width                 : 100px;
          height                : 100px;
          -webkit-border-radius : 50%;
          -moz-border-radius    : 50%;
          border-radius         : 50%;
          box-shadow            : 0 0 20px 5px #dce3f1;
          img {
            margin-top : 15px;
          }
        }
        .item--header {
          font-size   : 16px;
          line-height : 21px;
          margin      : 0 0 20px;
        }
        .item--title {
          font-size      : 26px;
          line-height    : 21px;
          color          : #4b79bb;
          font-weight    : bold;
          letter-spacing : 0.03em;
          margin         : 0 0 20px;
          .figure {
            font-size   : 30px;
            font-family : "Open Sans";
          }
        }
        .item--description {
          font-size   : 18px;
          line-height : 21px;
          color       : #093547;
          font-weight : bold;
          font-family : "Open Sans";
          margin      : 0;
          min-height  : 50px;
          height      : auto;
        }
      }
      .numbers__list--item.number-2 {
        .item--title {
          &:first-letter {
            font-size : 33px;
          }
        }
      }
    }
  }

  &__why {
    margin-top     : 150px;
    padding-bottom : 100px;
    &__header {
      text-align    : center;
      margin-bottom : 40px;
      &__title {
        .title {
          font-size      : 36px;
          line-height    : 36px;
          letter-spacing : 0.03em;
          color          : #093547;
        }
      }
      &__description {
        .description {
          font-size      : 18px;
          line-height    : 30px;
          letter-spacing : 0.03em;
          color          : #093547;
        }
      }
    }

    &__content {
      width   : 90%;
      margin  : 0 auto;
      padding : 10px;
      &__list {
        &--item {
          display         : flex;
          justify-content : space-around;
          align-items     : flex-start;
          margin-bottom   : 60px;
          .item__left {
            text-align     : center;
            display        : flex;
            flex-direction : column;
            align-items    : center;
            margin-right   : 130px;
            .item--img {
              img {
                transition : 0.3s;
              }
            }
            &--description {
              -webkit-transition : .5s;
              -moz-transition    : .5s;
              -ms-transition     : .5s;
              -o-transition      : .5s;
              transition         : .5s;
              .description {
                font-size   : 18px;
                line-height : 25px;
                width       : 180px;
                margin-top  : 0;
              }
            }
            &:hover {
              .item--img {
                img {
                  -webkit-transform : translateY(-70px);
                  -moz-transform    : translateY(-70px);
                  -ms-transform     : translateY(-70px);
                  -o-transform      : translateY(-70px);
                  transform         : translateY(-70px);
                }
              }
              .item__left--description {
                -webkit-transform : translateY(10px);
                -moz-transform    : translateY(10px);
                -ms-transform     : translateY(10px);
                -o-transform      : translateY(10px);
                transform         : translateY(10px);
              }
            }
          }
          .item__right {
            position              : relative;
            -webkit-border-radius : 20px;
            -moz-border-radius    : 20px;
            border-radius         : 20px;
            box-shadow            : 0 0 20px 5px #dce3f1;
            padding               : 38px 65px 38px 55px;
            &:before {
              position     : absolute;
              content      : '';
              top          : calc(50% - 9px);
              left         : -9px;
              background   : #ffffff;
              box-shadow   : -4px 4px 5px 0px #dce3f1;
              border-right : 3px solid white;
              border-top   : 3px solid white;
              width        : 18px;
              height       : 18px;
              transform    : rotate(45deg);
            }
            .title {
              font-size      : 18px;
              line-height    : 30px;
              letter-spacing : 0.03em;
              font-weight    : bold;
              color          : #093547;
              margin         : 0;
              padding        : 0;
              i {
                margin-right : 15px;
                color        : #f1244a;
              }
            }
            .text {
              text-align     : justify;
              padding        : 0;
              margin         : 27px 0 0 0;
              font-size      : 16px;
              line-height    : 24px;
              letter-spacing : 0.03em;
            }
          }
        }
      }
      .why--button {
        margin-top  : 50px;
        margin-left : calc(50% - 140px);
        width       : 280px;
      }
    }
  }

  &__benefits--bg {
    background : #3d4a6b;
    .semalt__benefits {
      max-width             : 1920px;
      margin                : 0 auto;
      padding               : 80px 0 100px;
      background            : url("~assets/img/benefits/settings-bg.png"),
      url("~assets/img/benefits/square-bg.png"),
      url("~assets/img/benefits/tilds-left.png"),
      url("~assets/img/benefits/tilds-right.png");
      background-position   : 95% 30%, 89% 75%, 0 50%, 100% 0;
      background-repeat     : no-repeat;
      background-attachment : fixed;
      position              : relative;
      .girls-cup {
        position : absolute;
        bottom   : -48px;
        left     : 0;
        z-index  : 10;
        height   : 300px;
      }
      &__title {
        text-align : center;
        .title.s-basic {
          color          : #ffffff;
          font-size      : 36px;
          line-height    : 36px;
          letter-spacing : 0.03em;
        }
      }
      &__content {
        display         : flex;
        flex-wrap       : wrap;
        justify-content : space-around;
        .content--item {
          width      : 365px;
          text-align : center;
          z-index    : 100;

          .item--image {
            background            : #f2f4fa;
            -webkit-border-radius : 50%;
            -moz-border-radius    : 50%;
            border-radius         : 50%;
            width                 : 100px;
            height                : 100px;
            margin                : 60px auto -50px;
            img {
              margin-bottom : 0;
            }
          }
          .item--bg {
            background            : #f2f4fa;
            -webkit-border-radius : 20px;
            -moz-border-radius    : 20px;
            border-radius         : 20px;
            padding               : 75px 45px 30px;
            min-height            : 200px;
            height                : auto;
            .item--title {
              margin      : 0 0 30px;
              padding     : 0;
              font-size   : 20px;
              line-height : 21px;
              font-weight : bold;
              color       : #093547;
            }
            .item--description {
              margin      : 0;
              padding     : 0;
              font-size   : 16px;
              line-height : 24px;
              color       : #093547;
            }
          }
        }
        .content--item-1,
        .content--item-3,
        .content--item-4,
        .content--item-6 {
          .item--image {
            img {
              margin-top : -30px;
            }
          }
        }
      }
    }
  }

  &__level--bg {
    background              : #f2f4fa;
    position                : relative;

    -webkit-background-size : 400px;
    background-size         : 400px;
    z-index                 : 1000;
    /*img {*/
    /*position : absolute;*/
    /*left : 5%;*/
    /*bottom : 0;*/
    /*height : 400px;*/
    /*}*/
    .semalt__level {
      max-width               : 1920px;
      margin                  : 0 auto;
      padding                 : 105px 0 65px;
      background              : url("~assets/img/level/up-bg.gif"),
      url("~assets/img/level/clouds.png"),
      url("~assets/img/level/clouds.png"),
      url("~assets/img/level/ground-bg.png");
      background-repeat       : no-repeat;
      background-position     : 5% 120%, 10% 30%, 95% 10%, 10% 100%;
      -webkit-background-size : 400px, 10%, 10%, 100%;
      background-size         : 400px, 10%, 10%, 100%;
      z-index                 : 999;
      /*background-image : url("~assets/img/level/up-bg.gif") left bottom no-repeat;*/
      &__title {
        width       : 470px;
        margin-left : 40%;
        z-index     : 100;
        .title {
          font-size      : 26px;
          line-height    : 50px;
          letter-spacing : 0.06em;
          color          : #093547;
        }
        .title--description {
          font-size      : 16px;
          line-height    : 24px;
          letter-spacing : 0.03em;
          color          : #093547;
          z-index        : 100;
        }
      }
      .level--button {
        width       : 150px;
        margin-top  : 50px;
        margin-left : 40%;
        z-index     : 100;
      }
    }
  }

  &__products {
    max-width      : 1920px;
    margin         : 0 auto;
    padding-bottom : 90px;
    &--title {
      text-align : center;
      margin     : 100px 0 50px;
      .title {
        font-size      : 36px;
        line-height    : 21px;
        letter-spacing : 0.03em;
        color          : #093547;
      }
    }
    .container {
      margin : 0 auto;
      .tabs {
        overflow        : hidden;
        margin-bottom   : -5px;
        width           : 100%;
        display         : flex;
        justify-content : space-between;
        text-align      : center;
        a {
          width            : 24.8%;
          cursor           : pointer;
          padding          : 12px 24px;
          transition       : background-color 0.2s;
          background-color : #f2f4fa;
          border-radius    : 10px 10px 0 0;
          font-weight      : bold;
          font-size        : 16px;
          z-index          : 100;
          position         : relative;
          &:last-child {
            padding : 12px 12px;
          }
          &:after {
            content          : '';
            position         : absolute;
            left             : calc(50% - 17px);
            display          : block;
            bottom           : -3px;
            width            : 34px;
            height           : 3px;
            background       : red;
            transform        : scale(0, 1);
            transition       : transform .3s;
            transform-origin : center top;
            z-index          : 200;
          }
          &:hover {
            background-color : #e9ecf4;
            i {
              color : #f1244a;
            }
          }
          i {
            margin-right : 15px;
            color        : #d7dbea;
          }
        }
        a.active {
          background-color : #3d4a6b;
          color            : #fff;
          border-bottom    : 2px solid #fff;
          cursor           : default;
          &:after {
            transform : scale(1, 1);
          }
          i {
            color : #f1244a;
          }
        }
      }
      .content {
        display             : flex;
        justify-content     : space-around;
        width               : 100%;
        padding             : 30px 30px 0 30px;
        border-radius       : 0 0 10px 10px;
        box-shadow          : 0 0 10px 5px #dce3f1;
        z-index             : 10;
        background          : url("~assets/img/products/graph.png") no-repeat;
        background-position : 95% 90%;
        min-height          : 430px;
        height              : auto;
        .content-image {
          position : relative;
          img {
            height : 350px;
          }
        }
        .tabcontent {
          width       : 50%;
          padding-top : 40px;
          margin-left : 90px;
          h4 {
            font-size   : 25px;
            line-height : 24px;
            color       : #093547;
          }
          p {
            min-height  : 115px;
            font-size   : 16px;
            line-height : 24px;
            color       : #093547;
          }
          .buttons {
            margin  : 30px 0 50px;
            display : flex;
            .btn-light {
              margin-left      : 25px;
              background-color : #f2f4fa;
              color            : #093547;
              /deep/ &.s-btn_type_primary {
                border-color : #f2f4fa;
              }
            }
            .btn-try {
              position : relative;
              &:before {
                content    : '';
                background : url("~assets/img/products/arrow.png") no-repeat;
                position   : absolute;
                width      : 30px;
                height     : 60px;
                left       : -30px;
                top        : -50px;
              }
            }
          }
        }
      }
    }
    .mobile__collapse {
      display : none;
    }
  }

  &__how-to--bg {
    background : #3d4a6b;
    .semalt__how-to {
      max-width           : 1920px;
      margin              : 0 auto;
      padding             : 120px 0 90px;
      color               : #ffffff;
      background          : url("~assets/img/how-to/left-bg.png"),
      url("~assets/img/how-to/drops.png");
      background-repeat   : no-repeat;
      background-position : 0% 100%, 100% 0%;
      background-size     : 600px, 150px;
      position            : relative;
      &--circle {
        -webkit-transform-origin          : top;
        -moz-transform-origin             : top;
        -ms-transform-origin              : top;
        -o-transform-origin               : top;
        transform-origin                  : top;
        -webkit-animation                 : hanging 1.8s infinite;
        -o-animation                      : hanging 1.8s infinite;
        animation                         : hanging 1.8s infinite;
        -webkit-animation-direction       : alternate;
        -moz-animation-direction          : alternate;
        -o-animation-direction            : alternate;
        animation-direction               : alternate;
        -webkit-animation-timing-function : linear;
        -moz-animation-timing-function    : linear;
        -o-animation-timing-function      : linear;
        animation-timing-function         : linear;
        img {
        }
      }
      &__text {
        &--title {
          .title.s-basic {
            color       : #fff;
            font-size   : 36px;
            line-height : 36px;
            font-weight : bold;
          }
        }
        &__main {
          &--subtitle {
            margin : 55px 0 25px 0;
            .subtitle {
              font-size   : 25px;
              line-height : 25px;
              font-weight : bold;
            }
          }
          &--description {
            max-width : 500px;
            .description {
              font-size   : 16px;
              line-height : 24px;
            }
          }
        }
        form {
          display        : flex;
          flex-direction : column;
          margin-top     : 40px;
          /deep/ .s-input > input {
            max-width : 440px;
            width     : 100%;
          }
          .analyze {
            width      : 250px;
            margin-top : 20px;
          }
        }
      }
      .right-bush {
        position : absolute;
        right    : 10px;
        bottom   : -122px;
      }
    }
  }
}

@keyframes hanging {
  from {
    -webkit-transform : rotate(10deg);
    -moz-transform    : rotate(10deg);
    -ms-transform     : rotate(10deg);
    -o-transform      : rotate(10deg);
    transform         : rotate(10deg);
  }
  to {
    -webkit-transform : rotate(-10deg);
    -moz-transform    : rotate(-10deg);
    -ms-transform     : rotate(-10deg);
    -o-transform      : rotate(-10deg);
    transform         : rotate(-10deg);
  }
}

@media only screen and (min-width : 993px) and (max-width : 1600px) {
  .semalt {
    background-color : #ffffff;
    .semalt__header--bg {
      .semalt__header {
        .right-girl {
          bottom : 0;
          right  : 2%;
        }
        .rocket {
          bottom : 0;
          right  : 2%;
        }
        &__video {
          margin-bottom : -30px;
          width         : 660px;
          height        : 345px;
          &:before {
            display : none;
          }
          .click-show {
            top : 50px;
            .youtube-icon {
              margin-top : calc(50% - 180px);
            }
          }
          .video {
            position : absolute;
            width    : 100%;
            height   : 120%;
            top      : 50px;
          }
        }
      }
    }
    &__products {
      .container {
        width : 95%;
        .tabs {
          a {
            display         : flex;
            flex-direction  : column;
            align-items     : center;
            justify-content : space-around;
            padding         : 10px 0 20px;
            i {
              margin : 10px 0 0 0;
              order  : 2;
            }
          }
        }
      }
    }
    &__how-to--bg {
      .semalt__how-to {
        background          : url("~assets/img/how-to/left-bg.png"),
        url("~assets/img/how-to/drops.png");
        background-repeat   : no-repeat;
        background-position : 0% 100%, 100% 0%;
        background-size     : 600px, 150px;
        .right-bush {
          position : absolute;
          right    : 10px;
          bottom   : -85px;
          height   : 240px;
        }
      }
    }
  }
}

@media only screen and (min-width : 769px) and (max-width : 992px) {
  .container {
    flex-direction  : column;
    align-items     : center;
    justify-content : center;
  }

  .semalt {
    .semalt__header--bg {
      .semalt__header {

        .right-girl,
        .rocket {
          display : none;
        }
        &__title {
          padding : 20px 0;
          width   : auto;
          margin  : 0 auto;
        }

        &__video {
          margin-bottom : -30px;
          &:before {
            display : none;
          }
        }
        &__arrow-down {
          left                  : 88%;
          border                : 3px solid #f2f4fa;
          -webkit-border-radius : 50%;
          -moz-border-radius    : 50%;
          border-radius         : 50%;
          .arrow-down {
            line-height : 35px;
          }
        }
      }
    }
    &__why {
      margin-top : 80px;
      &__content {
        &__list {
          &--item {
            flex-direction  : column;
            align-items     : center;
            justify-content : center;
            .item__left {
              margin : 40px 0 25px;
            }
            .item__right {
              width : 90%;
              &:before {
                position     : absolute;
                content      : '';
                top          : -9px;
                left         : calc(50% - 9px);
                background   : #ffffff;
                box-shadow   : -4px 4px 5px 0px #dce3f1;
                border-right : 3px solid white;
                border-top   : 3px solid white;
                width        : 18px;
                height       : 18px;
                transform    : rotate(135deg);
              }
            }
          }
        }
      }
    }
    &__benefits--bg {
      .semalt__benefits {
        &__content {
          flex-wrap : wrap;
          .content--item {
            width : 45%;
          }
        }
      }
    }
    &__level--bg {
      .semalt__level {
        background              : url("~assets/img/level/up-bg.gif"),
        url("~assets/img/level/clouds.png"),
        url("~assets/img/level/clouds.png"),
        url("~assets/img/level/ground-bg.png");
        background-repeat       : no-repeat;
        background-position     : 0 120%, 10% 30%, 95% 10%, 10% 100%;
        -webkit-background-size : 140px, 160px, 100%;
        background-size         : 300px, 140px, 160px, 100%;
        padding-top             : 35px;

        .semalt__level__title {
          margin : 0 35%;
        }
        .level--button {
          margin-left : 35%;
        }
      }
    }
    &__products {
      .container {
        width : 95%;
        .tabs {
          a {
            display         : flex;
            flex-direction  : column;
            align-items     : center;
            justify-content : space-around;
            padding         : 10px 0 20px;
            i {
              margin : 10px 0 0 0;
              order  : 2;
            }
          }
        }
        .content {
          align-items     : center;
          justify-content : space-around;
          .content-image {
            img {
              height : 200px;
            }
          }
          .tabcontent {
            padding-top : 0;
            .buttons {
              margin-top : 30px;
            }
          }
        }
      }
    }
    &__how-to--bg {
      .semalt__how-to {
        background          : url("~assets/img/how-to/left-bg.png"),
        url("~assets/img/how-to/drops.png");
        background-repeat   : no-repeat;
        background-position : 0% 100%, 100% 0%;
        background-size     : 600px, 150px;
        padding-top         : 50px;
        .flex {
          flex-direction : column;
          align-items    : center;
          .semalt__how-to--circle {
            margin-bottom : 40px;
          }
          &__text {
            &--title {
              margin-left : 0;
            }
            &__main {
              margin-left : 0;
            }
          }
        }
        .right-bush {
          position : absolute;
          right    : 0;
          bottom   : -70px;
          height   : 200px;
        }
      }
    }
  }
}

@media only screen and (min-width : 641px) and (max-width : 768px) {
  .container {
    flex-direction  : column;
    align-items     : center;
    justify-content : center;
  }

  .semalt {
    .semalt__header--bg {
      .semalt__header {
        .right-girl,
        .rocket {
          display : none;
        }
        &__title {
          padding : 20px 0;
          width   : auto;
          margin  : 0 auto;
          .title {
            font-weight : 800;
          }
        }

        &__video {
          margin-bottom : -70px;
          padding-top   : 33px;
          width         : 380px;
          height        : 320px;
          &:before {
            display : none;
          }
          .click-show {
            top : 28px;
            .youtube-icon {
              margin-top : calc(50% - 50px);
            }
          }
          .video {
            top    : 28px;
            height : 100%;
          }
        }
        &__arrow-down {
          left                  : 85%;
          border                : 3px solid #f2f4fa;
          -webkit-border-radius : 50%;
          -moz-border-radius    : 50%;
          border-radius         : 50%;
          z-index               : 10;
          .arrow-down {
            line-height : 35px;
          }
        }
      }
    }
    &__numbers {
      margin-top : 180px;
      &__list {
        .numbers__list--item {
          width         : 50%;
          margin-bottom : 80px;
          &:before {
            display : none;
          }
        }
      }
    }
    &__why {
      margin-top : 80px;
      &__content {
        &__list {
          &--item {
            flex-direction  : column;
            align-items     : center;
            justify-content : center;
            .item__left {
              margin : 40px 0 25px;
            }
            .item__right {
              width : 90%;
              &:before {
                position     : absolute;
                content      : '';
                top          : -9px;
                left         : calc(50% - 9px);
                background   : #ffffff;
                box-shadow   : -4px 4px 5px 0px #dce3f1;
                border-right : 3px solid white;
                border-top   : 3px solid white;
                width        : 18px;
                height       : 18px;
                transform    : rotate(135deg);
              }
            }
          }
        }
      }
    }
    &__benefits--bg {
      .semalt__benefits {
        .girls-cup {
          display : none;
        }
        &__content {
          flex-wrap : wrap;
          .content--item {
            width : 45%;
          }
        }
      }
    }
    &__level--bg {
      .semalt__level {
        background              : url("~assets/img/level/clouds.png"),
        url("~assets/img/level/clouds.png"),
        url("~assets/img/level/ground-bg.png");
        background-repeat       : no-repeat;
        background-position     : 10% 30%, 95% 10%, 10% 100%;
        -webkit-background-size : 140px, 160px, 100%;
        background-size         : 140px, 160px, 100%;
        padding-top             : 35px;
        .semalt__level__title {
          margin     : 0 auto;
          text-align : justify;
        }
        .level--button {
          margin-left : calc(50% - 75px);
        }
      }
    }
    &__products {
      &--title {
        margin-top : 50px;
      }
      .container {
        width : 95%;
        .tabs {
          a {
            display         : flex;
            flex-direction  : column;
            align-items     : center;
            justify-content : space-around;
            padding         : 10px 0 20px;
            i {
              margin : 10px 0 0 0;
              order  : 2;
            }
          }
        }
        .content {
          align-items    : center;
          flex-direction : column;
          .content-image {
            order : 2;
            img {
              display : none;
            }
          }
          .tabcontent {
            padding-top : 0;
            order       : 1;
            width       : 70%;
            .buttons {
              margin : 30px 0 50px;
            }
          }
        }
      }
    }
    &__how-to--bg {
      .semalt__how-to {
        background          : url("~assets/img/how-to/left-bg.png"),
        url("~assets/img/how-to/drops.png");
        background-repeat   : no-repeat;
        background-position : 0% 100%, 100% 0%;
        background-size     : 600px, 150px;
        .right-bush {
          display : none;
        }
        .flex {
          flex-direction : column;
          align-items    : center;
          .semalt__how-to--circle {
            margin-bottom : 40px;
          }
          &__text {
            &--title {
              margin-left : 0;
            }
            &__main {
              margin-left : 0;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width : 481px) and (max-width : 640px) {
  .container {
    flex-direction  : column;
    align-items     : center;
    justify-content : center;
  }

  .semalt {
    .semalt__header--bg {
      .right-girl,
      .rocket,
      .tilds-2 {
        display : none;
      }
      .semalt__header {
        &__title {
          padding : 20px 0;
          width   : auto;
          margin  : 0 auto;
          .title {
            font-weight : 800;
          }
        }

        &__video {
          margin-bottom : -70px;
          width         : 380px;
          height        : 320px;
          padding-top   : 33px;
          &:before {
            display : none;
          }
          .click-show {
            top : 28px;
            .youtube-icon {
              margin-top : calc(50% - 50px);
            }
          }
          .video {
            top    : 28px;
            height : 100%;
          }
        }
        &__arrow-down {
          left                  : 2%;
          border                : 3px solid #f2f4fa;
          -webkit-border-radius : 50%;
          -moz-border-radius    : 50%;
          border-radius         : 50%;
          .arrow-down {
            line-height : 35px;
          }
        }
      }
    }
    &__numbers {
      margin-top : 120px;
      &__list {
        .numbers__list--item {
          width         : 50%;
          margin-bottom : 80px;
          &:before {
            display : none;
          }
        }
      }
    }
    &__why {
      margin-top : 0;
      &__content {
        &__list {
          &--item {
            flex-direction  : column;
            align-items     : center;
            justify-content : center;
            margin-bottom   : 20px;
            .item__left {
              margin : 40px 0 25px;
            }
            .item__right {
              padding : 30px 25px;
              width   : 90%;
              &:before {
                position     : absolute;
                content      : '';
                top          : -9px;
                left         : calc(50% - 9px);
                background   : #ffffff;
                box-shadow   : -4px 4px 5px 0px #dce3f1;
                border-right : 3px solid white;
                border-top   : 3px solid white;
                width        : 18px;
                height       : 18px;
                transform    : rotate(135deg);
              }
            }
          }
        }
      }
    }
    &__benefits--bg {
      .semalt__benefits {
        .girls-cup {
          display : none;
        }
        &__content {
          flex-wrap : wrap;
          .content--item {
            width : 60%;
          }
        }
      }
    }
    &__level--bg {
      .semalt__level {
        background              : url("~assets/img/level/clouds.png"),
        url("~assets/img/level/clouds.png"),
        url("~assets/img/level/ground-bg.png");
        background-repeat       : no-repeat;
        background-position     : 10% 30%, 95% 10%, 10% 100%;
        -webkit-background-size : 140px, 160px, 100%;
        background-size         : 140px, 160px, 100%;
        padding-top             : 35px;
        .semalt__level__title {
          margin     : 0 auto;
          text-align : justify;
        }
        .level--button {
          margin-left : calc(50% - 75px);
        }
      }
    }
    &__products {
      &--title {
        margin-top : 50px;
      }
      .container {
        width : 95%;
        .tabs {
          a {
            display         : flex;
            flex-direction  : column;
            align-items     : center;
            justify-content : space-around;
            padding         : 10px 0 20px;
            i {
              margin : 10px 0 0 0;
              order  : 2;
            }
          }
        }
        .content {
          align-items : center;
          .content-image {
            img {
              display : none;
            }
          }
          .tabcontent {
            margin      : 0 auto;
            width       : 90%;
            padding-top : 0;
            .buttons {
              margin : 30px 0 50px;
              .tab-btn {
                margin-bottom : 20px;
              }
              .btn-light {
                margin-left : 20px;
              }
            }
          }
        }
      }
    }
    &__how-to--bg {
      .semalt__how-to {
        padding             : 30px 20px 80px 20px;
        background          : url("~assets/img/how-to/left-bg.png"),
        url("~assets/img/how-to/drops.png");
        background-repeat   : no-repeat;
        background-position : 0% 100%, 100% 0%;
        background-size     : 400px, 150px;
        .right-bush {
          display : none;
        }
        .flex {
          flex-direction : column;
          align-items    : center;
          .semalt__how-to--circle {
            margin-bottom : 40px;
          }
          &__text {
            &--title {
              margin-left : 0;
            }
            &__main {
              margin-left : 0;
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width : 320px) and (max-width : 480px) {

  /deep/ .blue-bg {
    background : #4b79bb;
    color      : #fff;
  }

  .container {
    flex-direction  : column;
    align-items     : center;
    justify-content : center;
  }

  .semalt {
    .semalt__header--bg {
      .semalt__header {
        .right-girl,
        .tilds-1,
        .tilds-2,
        .rocket {
          display : none;
        }
        &__title {
          padding    : 20px 0;
          width      : auto;
          margin     : 0 auto;
          text-align : center;
          .title {
            font-weight : 800;
          }
        }

        &__video {
          margin-bottom : -70px;
          width         : 300px;
          height        : 270px;
          padding-top   : 27px;
          &:before {
            display : none;
          }
          .click-show {
            top : 23px;
            .youtube-icon {
              margin-top : calc(50% - 35px);
            }
          }
          .video {
            top    : 23px;
            height : 100%;
          }
        }
        &__arrow-down {
          display : none;
        }
      }
    }
    &__numbers {
      margin-top : 120px;
      &__list {
        .numbers__list--item {
          width         : 50%;
          margin-bottom : 80px;
          &.left-to-right,
          &.right-to-left {
            opacity : 1;
          }
          &:before {
            display : none;
          }
          .item--description {
            min-height : 70px;
            height     : auto;
          }
        }
      }
    }
    &__why {
      margin-top : 0;
      .title {
        line-height : 54px;
      }
      &__content {
        &__list {
          &--item {
            flex-direction  : column;
            align-items     : center;
            justify-content : center;
            margin-bottom   : 15px;
            .item__left {
              margin : 40px 0 25px;
              &.why-left {
                opacity : 1;
              }
              .description {
                width : 180px;
              }
            }
            .item__right {
              padding : 30px 25px;
              width   : 90%;
              .title {
                text-align : center;
              }
              &.why-right {
                opacity : 1;
                .text {
                  text-align : center;
                }
              }
              .title {
                i {
                  margin-right : 10px;
                }
              }
              &:before {
                position     : absolute;
                content      : '';
                top          : -9px;
                left         : calc(50% - 9px);
                background   : #ffffff;
                box-shadow   : -4px 4px 5px 0px #dce3f1;
                border-right : 3px solid white;
                border-top   : 3px solid white;
                width        : 18px;
                height       : 18px;
                transform    : rotate(135deg);
              }
            }
          }
        }
      }
    }
    &__benefits--bg {
      .semalt__benefits {
        .semalt__benefits__title {
          .title {
            line-height : 54px;
          }
        }
        .girls-cup {
          display : none;
        }
        &__content {
          flex-wrap : wrap;
          .content--item {
            width : 80%;
            &.benef-left {
              opacity           : 1;
              -webkit-transform : translateX(0);
              -moz-transform    : translateX(0);
              -ms-transform     : translateX(0);
              -o-transform      : translateX(0);
              transform         : translateX(0);
            }
          }
        }
      }
    }
    &__level--bg {
      .semalt__level {
        background              : url("~assets/img/level/clouds.png"),
        url("~assets/img/level/clouds.png"),
        url("~assets/img/level/ground-bg.png");
        background-repeat       : no-repeat;
        background-position     : 10% 30%, 95% 10%, 10% 100%;
        -webkit-background-size : 60px, 80px, 100%;
        background-size         : 60px, 80px, 100%;
        padding                 : 35px 15px;
        .semalt__level__title {
          margin     : 0 auto;
          text-align : center;
          width      : auto;
        }
        .level--button {
          margin-left : calc(50% - 83px);
        }
      }
    }
    &__products {
      padding-bottom : 20px;
      &--title {
        margin-top : 50px;
      }
      .container {
        display : none;
      }
      .mobile__collapse {
        display : block;
        width   : 90%;
        margin  : 80px auto 10px;
        .s-title {
          padding               : 30px;
          text-align            : center;
          position              : relative;
          -webkit-border-radius : 10px;
          -moz-border-radius    : 10px;
          border-radius         : 10px;
          background            : #f2f4fa;
          color                 : #093547;
          font-weight           : bold;
          font-size             : 24px;
          display               : flex;
          flex-direction        : column;
          i {
            order      : 2;
            margin-top : 20px;
            color      : #d7dbea;
          }
          &.s-active {
            background            : #3d4a6b;
            color                 : #fff;
            -webkit-border-radius : 10px 10px 0 0;
            -moz-border-radius    : 10px 10px 0 0;
            border-radius         : 10px 10px 0 0;
            i {
              color : #f1244a;
            }
          }
          /*&:after {*/
          /*content : '';*/
          /*position : absolute;*/
          /*border: 10px solid transparent;*/
          /*border-top: 10px solid inherit;*/
          /*bottom : -20px;*/
          /*left : calc(50%-5px);*/
          /*}*/
        }
        .s-content {
          text-align            : center;
          margin-bottom         : 50px;
          -webkit-border-radius : 0 0 10px 10px;
          -moz-border-radius    : 0 0 10px 10px;
          border-radius         : 0 0 10px 10px;
          padding               : 0 5px;
          &.s-collapse[aria-expanded="true"] {
            -webkit-box-shadow : 0 0 10px 5px #dce3f1;
            box-shadow         : 0 0 10px 5px #dce3f1;
          }
          h4 {
            font-size : 18px;
            color     : #093547;
          }
          p {
            font-size : 16px;
            color     : #093547;
          }
          .buttons {
            margin-top      : 30px;
            display         : flex;
            flex-direction  : column;
            justify-content : space-around;
            align-items     : center;
            .s-btn {
              width : 60%;
            }
            .btn-light {
              background-color : #f2f4fa;
              color            : #093547;
              border-color     : #f2f4fa;
              margin-top       : 20px;
              margin-bottom    : 50px;
            }
          }
        }
      }
    }
    &__how-to--bg {
      .semalt__how-to {
        padding             : 30px 20px 80px 20px;
        background          : url("~assets/img/how-to/left-bg.png"),
        url("~assets/img/how-to/drops.png");
        background-repeat   : no-repeat;
        background-position : 0% 100%, 100% 0%;
        background-size     : 400px, 150px;
        .right-bush {
          display : none;
        }
        .flex {
          flex-direction : column;
          align-items    : center;
          .semalt__how-to--circle {
            margin-bottom     : 40px;
            -webkit-animation : none;
            -o-animation      : none;
            animation         : none;
            img {
              height : 190px;
            }
          }
          .semalt__how-to__text {
            .semalt__how-to__text--title {
              margin-left : 0;
              .title {
                font-size : 30px;
              }
            }
            .semalt__how-to__text__main {
              margin-left : 0;
              .semalt__how-to__text__main--subtitle {
                .subtitle {
                  font-size   : 23px;
                  line-height : 23px;
                }
              }
              form {
                display        : flex;
                flex-direction : column;
                align-items    : center;
                .s-group {
                  width : 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}


</style>

