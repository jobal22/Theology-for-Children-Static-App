export const findBook = (books=[], bookId) =>
books.find(book => book.id = bookId)

export const findChapter = (chapters=[], chapterId) =>
chapters.find(chapter => chapter.id = chapterId)

export const findVerse = (verses=[], chapterId) =>
verses.find(verse => verse.chapterId == chapterId)

export const findChaptersinBook = (chapters=[], bookId) =>
chapters.find(chapter => chapter.bookId = bookId)

export const findPlanTitle = (readingPlanTitles, readingPlanTitleId) =>
readingPlanTitles.find(readingPlanTitle => readingPlanTitle.id === readingPlanTitleId)

export const findPlan = (readingPlans, readingPlanId) =>
readingPlans.find(readingPlan => readingPlan.id === readingPlanId)
