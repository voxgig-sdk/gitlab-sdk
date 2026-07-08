package core

type GitlabError struct {
	IsGitlabError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewGitlabError(code string, msg string, ctx *Context) *GitlabError {
	return &GitlabError{
		IsGitlabError: true,
		Sdk:              "Gitlab",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *GitlabError) Error() string {
	return e.Msg
}
