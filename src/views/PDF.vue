<template>
  <div class="pdf-page">
    <div class="pdf-page-content" ref="screenshot-playground">
      <section class="header pdf-section">
        <h2 class="header-name">{{$dataJson.self.name}}</h2>
        <div class="header-content">{{$dataJson.self.school}}</div>
        <div class="header-content">{{new Date().getFullYear() - $moment($dataJson.self.workStart).year()}}年工作经验 / {{new Date().getFullYear() - $dataJson.self.bornYear}}岁</div>
        <div class="header-content">
          <a :href="`mailto:${$dataJson.self.email}`">Email: {{$dataJson.self.email}}</a>
        </div>
        <div class="header-content">
          <a target="_blank" :href="$dataJson.self.github">Github: {{$dataJson.self.github}}</a>
        </div>
        <div class="header-content">
          个人主页: <a target="_blank" href="https://张潇.com">https://张潇.com</a>
        </div>
      </section>
      <section class="pdf-section">
        <template v-for="(info, $infoIndex) in $dataJson.self.info">
          <h2 class="pdf-section_title" :key="`self-info-title-${$infoIndex}`">{{info.title}}</h2>
          <div class="pdf-section_content" :key="`self-info-content-${$infoIndex}`">
            <ul class="pdf-section_content-list">
              <li class="pdf-section_content-item" v-for="(item, $itemIndex) in info.content.split('\n')" :key="`self-info-content-${$infoIndex}-${$itemIndex}`">{{item}}</li>
            </ul>
          </div>
        </template>
      </section>
      <section class="pdf-section">
        <h2 class="pdf-section_title">工作经历</h2>
        <div class="pdf-section_content" v-for="(work, $workIndex) in $dataJson.works" :key="`work-item-${$workIndex}`">
          <h3 class="pdf-section_content-title">
            {{work.company}}（{{work.companyName}}）
          </h3>
          <p class="pdf-section_content-row">{{work.job}} / {{work.timeRange.join(' ~ ')}}</p>
          <ul class="pdf-section_content-tag-list">
            <li class="pdf-section_content-tag-item" v-for="(workTag, $workTagIndex) in work.tags" :key="`work-${$workIndex}-tag-${$workTagIndex}`">{{workTag}}</li>
          </ul>
          <p class="pdf-section_content-row" v-for="(workRow, $workRowIndex) in work.mainWork" :key="`work-${$workIndex}-main-work-${$workRowIndex}`">{{workRow}}</p>
        </div>
      </section>
      <section class="pdf-section">
        <h2 class="pdf-section_title">项目经历</h2>
        <div class="pdf-section_content" v-for="(project, $projectIndex) in $dataJson.projects" :key="`project-item-${$projectIndex}`">
          <h3 class="pdf-section_content-title">
            {{project.name}}
          </h3>
          <ul class="pdf-section_content-tag-list">
            <li class="pdf-section_content-tag-item" v-for="(projectTag, $projectTagIndex) in project.tags" :key="`project-${$projectIndex}-tag-${$projectTagIndex}`">{{projectTag}}</li>
          </ul>
          <p class="pdf-section_content-row">{{project.desc}}</p>
          <p class="pdf-section_content-row">{{project.subDesc}}</p>
        </div>
      </section>
      <section class="pdf-section">
        <h2 class="pdf-section_title">教育经历</h2>
        <div class="pdf-section_content horizontal">
          <div class="column">
            <img class="school-logo" :src="$dataJson.school.image" alt=""/>
          </div>
          <div class="column school-info">
            <h3 class="pdf-section_content-title">
              {{$dataJson.school.name}}
            </h3>
            <p class="pdf-section_content-row">{{$dataJson.school.education}} / {{$dataJson.school.timeRange.join(' ~ ')}}</p>
            <p class="pdf-section_content-row">{{$dataJson.school.major}}</p>
          </div>
        </div>
      </section>
      <section class="pdf-section">
        <h2 class="pdf-section_title">个人主页</h2>
        <div class="pdf-section_content">
          <h3 class="pdf-section_content-title">
            <a target="_blank" href="https://张潇.com">点击进入（https://张潇.com）</a>
          </h3>
        </div>
      </section>
      <section class="pdf-section">
        <h2 class="pdf-section_title">线上简历</h2>
        <div class="pdf-section_content">
          <h3 class="pdf-section_content-title">
            <a target="_blank" href="https://张潇.com/#/pdf">点击查看（https://张潇.com/#/pdf）</a>
          </h3>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PdfPage'
}
</script>

<style lang="scss">
  $very-light-gray: #fafafa;
  $light-gray: #e7e7e7;
  $gray: #666;
  $dark-gray: #333;
  $common-white: #fff;
  $primary-color: #86d1f7;
  .pdf-page {
    background-color: $common-white;
    min-height: 100vh;
    color: $dark-gray;
    font-size: 14px;
    display: flex;
    justify-content: center;
    .pdf-page-content {
      width: 800px;
      margin: 20px;
      border: 1px solid $light-gray;
      border-radius: 4px;
    }
    .pdf-section {
      padding: 50px 80px;
      &:not(.header) + .pdf-section {
        padding-top: 0;
      }
      &_title {
        border-left: 4px solid $primary-color;
        padding-left: 10px;
        margin: 20px 0 30px;
      }
      &_content {
        &.horizontal {
          display: flex;
        }
      }
      &_content-list {
        margin: 20px 0 30px;
      }
      &_content-item {
        list-style-type: disc;
        list-style-position: inside;
        margin: 6px 0;
      }
      &_content-tag-list {
        display: flex;
        flex-wrap: wrap;
        margin: 8px 0 16px;
      }
      &_content-tag-item {
        margin-right: 10px;
        line-height: 20px;
        border-radius: 100px;
        padding: 2px 20px;
        border: 1px solid $light-gray;
        font-size: 12px;
        color: $gray;
        margin-top: 10px;
      }
      &_content-title {
        margin: 30px 0 10px;
      }
      &_content-row {
        & + .pdf-section_content-row {
          margin-top: 10px;
        }
      }
    }
    .header {
      border-bottom: 1px solid $light-gray;
      background-color: $very-light-gray;
      &-content {
        margin-top: 12px;
      }
    }
    .school-logo {
      width: 100px;
      height: 100px;
      margin-right: 20px;
    }
    .school-info {
      .pdf-section_content-title {
        margin-top: 0;
      }
    }
  }
</style>
