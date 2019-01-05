## 1、git三区以及用途
- 工作区：工作开发代码的地方
- 暂存区：暂时存储临时性代码的地方
- 版本区：最终版本控制代码的地方

## 2、git本地版本控制指令
- git init 初始化版本库，只要一次
- git add . 将工作区所有文件添加到暂存区
- git commit -m 'xxx' 将暂存区所有文件添加到版本区
- git status 查看文件的状态（工作区为红色，暂存区为绿色，版本区没有显示）

## 3、git分支操作指令
- git checkout -b dev 新建并切换到dev分支
- git checkout master 切换到master分支
- git merge dev 合并dev分支
- git branch master 新建master分支

## 4、请写出以下需求的指令
- 远程仓库为空，本地仓库有代码，如何提交？
	- 本地版本控制
		- git init 
		- git add . 
		- git commit -m 'xxx' 
	- 本地仓库关联远程仓库
		- git remote add origin xxx
		- git remote remove origin 删除当前关联的仓库
	- 将本地仓库内容推送到远程仓库去
		- git push -u origin master
- 远程仓库有内容，本地仓库没有内容，如何拉取？
	- git clone xxx
- 上一步完成后，如何更新远程仓库的内容，如何推送本地仓库的更新？
	- git pull origin master
	- git push origin master

## 5、隐藏元素的css方案（至少4种）
1. width height 0  overflow hidden
2. opacity 0
3. visibility hidden
4. display none
5. transform scale(0)
6. position left -10000px