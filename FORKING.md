### Forking this Repository

1. In GitHub, navigate to the repository you want to fork.
2. Click on the 'Fork' button at the top-right corner of the page. 
3. Choose your own account to create the fork.

**Note**: Make sure your fork is also set to ***PRIVATE*** in the repository settings.

### Making Changes

Once you have forked the repository, clone it to your local machine to make your changes:

```bash
git clone git@github.com:QSTN-labs/qstn-marketplace-v2-draft.git
cd qstn-marketplace-v2-draft
```

Create a new branch for your changes:

```bash
git checkout -b my-feature
```

### Committing Changes 

When using semantic-release, it's important to follow conventional commit messages. An example of a commit message:

```bash
git commit -m "feat(ui): add new feature"
```

Here `feat` is the type of change, and `add new feature` is a brief description. 

Other types include `fix`, `docs`, `style`, `refactor`, `perf`, `test`, and `chore`.

### Creating a Pull Request

After pushing your changes, go to the GitHub page of your forked repository and click 'Pull Request'. 

Ensure you're comparing your new branch in your fork to the main branch in the original repository. Create the pull request providing a meaningful description of your changes.

### Reviewing and Merging the PR

Reviewers will review the code and approve the PR. 
Once the PR is approved, semantic-release will handle the versioning based on the commit messages.

### Keeping Your Fork Synced

To keep your fork synced with the original repository:

```bash
git remote add upstream https://github.com/QSTN-labs/qstn-marketplace-v2-draft
git fetch upstream
git checkout main
git merge upstream/main
```

This workflow helps in maintaining a standard, ensures your repositories remain private, and makes versioning automatic and semantic.

Thank you!
